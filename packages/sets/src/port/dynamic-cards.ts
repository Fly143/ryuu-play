/**
 * Dynamic card factory: builds Card instances from generated plans.
 * Plans are produced by tools/cardgen from pokemon-tcg-data dumps.
 */
import {
  Attack,
  Card,
  CardTag,
  CardType,
  Effect,
  EnergyCard,
  EnergyType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  State,
  StoreLike,
  TrainerCard,
  TrainerEffect,
  TrainerType,
  PowerEffect,
  AttackEffect,
} from '@ptcg/common';

import { applyAttackOp, applyPowerOp, applyTrainerOp, EffectOp, hasEffectOps } from '../common/effect-ops';
import { createUniqueCard } from './effects/unique-cards';

export interface AttackPlan {
  name: string;
  cost: string[];
  damage: string;
  text: string;
  ops?: EffectOp[];
}

export interface PowerPlan {
  name: string;
  type: 'Pokémon Power' | 'Pokémon-Power' | 'Poké-Power' | 'Poké-Body' | 'Ability' | 'Ancient Trait' | string;
  text: string;
  ops?: EffectOp[];
  useWhenInPlay?: boolean;
}

export interface CardPlan {
  id: string;
  name: string;
  fullName: string;
  set: string;
  number: string;
  superType: 'POKEMON' | 'TRAINER' | 'ENERGY';
  subtypes: string[];
  tags: string[];
  // pokemon
  hp?: number;
  types?: string[];
  evolvesFrom?: string;
  stage?: string;
  retreat?: string[];
  weakness?: { type: string; value?: number }[];
  resistance?: { type: string; value: number }[];
  attacks?: AttackPlan[];
  powers?: PowerPlan[];
  rules?: string[];
  // trainer
  trainerType?: string;
  text?: string;
  // energy
  energyType?: 'BASIC' | 'SPECIAL';
  provides?: string[];
  provideAmount?: number;
  /** Trainer-level effect ops (also used for energy if needed). */
  ops?: EffectOp[];
  // meta
  ptcgoId: string;
  imageUrl?: string;
  coverage: 'full' | 'partial' | 'metadata';
}

const CARD_TYPE_MAP: Record<string, CardType> = {
  Colorless: CardType.COLORLESS,
  Grass: CardType.GRASS,
  Fighting: CardType.FIGHTING,
  Psychic: CardType.PSYCHIC,
  Water: CardType.WATER,
  Lightning: CardType.LIGHTNING,
  Metal: CardType.METAL,
  Darkness: CardType.DARK,
  Dark: CardType.DARK,
  Fire: CardType.FIRE,
  Dragon: CardType.DRAGON,
  Fairy: CardType.FAIRY,
};

const STAGE_MAP: Record<string, Stage> = {
  Basic: Stage.BASIC,
  'Stage 1': Stage.STAGE_1,
  'Stage 2': Stage.STAGE_2,
  Restored: Stage.RESTORED,
  None: Stage.NONE,
};

const TRAINER_TYPE_MAP: Record<string, TrainerType> = {
  Item: TrainerType.ITEM,
  Supporter: TrainerType.SUPPORTER,
  Stadium: TrainerType.STADIUM,
  'Pokémon Tool': TrainerType.TOOL,
  'Pokémon Tool F': TrainerType.TOOL,
  'Technical Machine': TrainerType.TOOL,
  'Rocket\'s Secret Machine': TrainerType.ITEM,
  'Goldenrod Game Corner': TrainerType.ITEM,
};

const POWER_TYPE_MAP: Record<string, PowerType> = {
  'Pokémon Power': PowerType.POKEPOWER,
  'Pokémon-Power': PowerType.POKEPOWER,
  'Poké-Power': PowerType.POKEPOWER,
  'Poké-Body': PowerType.POKEBODY,
  Ability: PowerType.ABILITY,
  'Ancient Trait': PowerType.ANCIENT_TRAIT,
};

const TAG_MAP: Record<string, CardTag> = {
  SP: CardTag.POKEMON_SP,
  EX: CardTag.POKEMON_EX,
  GX: CardTag.POKEMON_GX,
  'LEVEL-UP': CardTag.POKEMON_LV_X,
  'Level-Up': CardTag.POKEMON_LV_X,
  'ACE SPEC': CardTag.ACE_SPEC,
  V: CardTag.POKEMON_V,
  VMAX: CardTag.POKEMON_VMAX,
  VSTAR: CardTag.POKEMON_VSTAR,
  'V-UNION': CardTag.POKEMON_VUNION,
  ex: CardTag.POKEMON_EX_SV,
  MEGA: CardTag.POKEMON_MEGA,
  BREAK: CardTag.POKEMON_BREAK,
  LEGEND: CardTag.POKEMON_LEGEND,
  Tera: CardTag.POKEMON_TERA,
  Radiant: CardTag.POKEMON_RADIANT,
  'Prism Star': CardTag.POKEMON_PRISM,
  'TAG TEAM': CardTag.TAG_TEAM,
  'Ultra Beast': CardTag.ULTRA_BEAST,
  Ancient: CardTag.ANCIENT,
  Future: CardTag.FUTURE,
  Baby: CardTag.BABY,
  Restored: CardTag.RESTORED,
};

function mapCardTypes(types?: string[]): CardType[] {
  return (types || []).map(t => CARD_TYPE_MAP[t]).filter((t): t is CardType => t !== undefined);
}

function mapTags(subtypes?: string[], extra?: string[]): CardTag[] {
  const out = new Set<CardTag>();
  for (const s of subtypes || []) {
    const tag = TAG_MAP[s];
    if (tag) out.add(tag);
  }
  for (const s of extra || []) {
    const tag = TAG_MAP[s];
    if (tag) out.add(tag);
  }
  if ((subtypes || []).includes('Fossil') || (subtypes || []).includes('Claw Fossil') || (subtypes || []).includes('Root Fossil') || (subtypes || []).includes('Mysterious Fossil')) {
    out.add(CardTag.FOSSIL);
  }
  return Array.from(out);
}

function mapAttacks(plan: CardPlan): Attack[] {
  return (plan.attacks || []).map(a => ({
    name: a.name,
    cost: mapCardTypes(a.cost),
    damage: a.damage || '',
    text: a.text || '',
  }));
}

function mapPowers(plan: CardPlan): Power[] {
  return (plan.powers || []).map(p => ({
    name: p.name,
    powerType: POWER_TYPE_MAP[p.type] ?? PowerType.ABILITY,
    text: p.text || '',
    useWhenInPlay: p.useWhenInPlay ?? true,
  }));
}

class DynamicPokemonCard extends PokemonCard {
  public cardTypes: CardType[] = [];
  public evolvesFrom = '';
  public stage: Stage = Stage.BASIC;
  public retreat: CardType[] = [];
  public hp = 0;
  public weakness: { type: CardType; value?: number }[] = [];
  public resistance: { type: CardType; value: number }[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [];
  public tags: CardTag[] = [];
  public set = '';
  public name = '';
  public fullName = '';
  public text = '';

  private attackOps: (EffectOp[] | undefined)[] = [];
  private powerOps: (EffectOp[] | undefined)[] = [];

  public init(plan: CardPlan): this {
    this.cardTypes = mapCardTypes(plan.types);
    this.evolvesFrom = plan.evolvesFrom || '';
    this.stage = STAGE_MAP[plan.stage || 'Basic'] ?? Stage.BASIC;
    this.retreat = mapCardTypes(plan.retreat);
    this.hp = plan.hp || 0;
    this.weakness = (plan.weakness || []).map(w => ({
      type: CARD_TYPE_MAP[w.type] ?? CardType.COLORLESS,
      value: w.value,
    }));
    this.resistance = (plan.resistance || []).map(r => ({
      type: CARD_TYPE_MAP[r.type] ?? CardType.COLORLESS,
      value: r.value,
    }));
    this.powers = mapPowers(plan);
    this.attacks = mapAttacks(plan);
    this.tags = mapTags(plan.subtypes, plan.tags);
    this.set = plan.set;
    this.name = plan.name;
    this.fullName = plan.fullName;
    this.text = plan.text || '';
    this.attackOps = (plan.attacks || []).map(a => a.ops);
    this.powerOps = (plan.powers || []).map(p => p.ops);
    return this;
  }

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect) {
      const idx = this.attacks.indexOf(effect.attack);
      if (idx >= 0) {
        const ops = this.attackOps[idx];
        if (hasEffectOps(ops)) {
          for (const op of ops || []) {
            state = applyAttackOp(store, state, effect, op);
          }
        }
      }
    }
    if (effect instanceof PowerEffect) {
      const idx = this.powers.indexOf(effect.power);
      if (idx >= 0) {
        const ops = this.powerOps[idx];
        if (hasEffectOps(ops)) {
          for (const op of ops || []) {
            state = applyPowerOp(store, state, effect, this, op);
          }
        }
      }
    }
    return state;
  }
}

class DynamicTrainerCard extends TrainerCard {
  public trainerType: TrainerType = TrainerType.ITEM;
  public set = '';
  public name = '';
  public fullName = '';
  public text = '';
  public tags: CardTag[] = [];
  public useWhenInPlay = false;

  private ops: EffectOp[] = [];

  public init(plan: CardPlan): this {
    this.trainerType = TRAINER_TYPE_MAP[plan.trainerType || 'Item'] ?? TrainerType.ITEM;
    this.set = plan.set;
    this.name = plan.name;
    this.fullName = plan.fullName;
    this.text = plan.text || '';
    this.tags = mapTags(plan.subtypes, plan.tags);
    this.useWhenInPlay = this.trainerType === TrainerType.TOOL || this.trainerType === TrainerType.STADIUM;
    this.ops = plan.ops || [];
    return this;
  }

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      if (hasEffectOps(this.ops)) {
        for (const op of this.ops) {
          state = applyTrainerOp(store, state, effect, this, op);
        }
      }
    }
    return state;
  }
}

class DynamicEnergyCard extends EnergyCard {
  public energyType: EnergyType = EnergyType.BASIC;
  public provides: CardType[] = [];
  public provideAmount = 1;
  public set = '';
  public name = '';
  public fullName = '';
  public text = '';
  public tags: CardTag[] = [];

  public init(plan: CardPlan): this {
    this.energyType = plan.energyType === 'SPECIAL' ? EnergyType.SPECIAL : EnergyType.BASIC;
    this.provides = mapCardTypes(plan.provides);
    this.provideAmount = plan.provideAmount || 1;
    this.set = plan.set;
    this.name = plan.name;
    this.fullName = plan.fullName;
    this.text = plan.text || '';
    this.tags = mapTags(plan.subtypes, plan.tags);
    return this;
  }
}

export function createCardFromPlan(plan: CardPlan): Card {
  // Prefer hand-written unique-effect class (upstream one-file-per-card style)
  const handWritten = createUniqueCard(plan.fullName);
  if (handWritten !== undefined) {
    return handWritten;
  }
  switch (plan.superType) {
    case 'POKEMON':
      return (new DynamicPokemonCard() as DynamicPokemonCard).init(plan);
    case 'TRAINER':
      return (new DynamicTrainerCard() as DynamicTrainerCard).init(plan);
    case 'ENERGY':
      return (new DynamicEnergyCard() as DynamicEnergyCard).init(plan);
    default:
      return (new DynamicEnergyCard() as DynamicEnergyCard).init(plan);
  }
}

export function createCardsFromPlans(plans: CardPlan[]): Card[] {
  return plans.map(createCardFromPlan);
}

/** Group plans by set code (ptcgo code). */
export function groupPlansBySet(plans: CardPlan[]): Map<string, CardPlan[]> {
  const map = new Map<string, CardPlan[]>();
  for (const plan of plans) {
    const list = map.get(plan.set) || [];
    list.push(plan);
    map.set(plan.set, list);
  }
  return map;
}
