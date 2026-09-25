import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MachampEX_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Steaming Mad", cost: [], damage: "20×", text: "This attack does 20 damage times the number of damage counters on this Pokémon. This Pokémon is now Confused." },
      { name: "Crazy Hammer", cost: [], damage: "80+", text: "If this Pokémon is affected by a Special Condition, this attack does 80 more damage. Then, remove all Special Conditions from this Pokémon." }
  ];
  public set: string = "BKT";
  public name: string = "Machamp-EX";
  public fullName: string = "Machamp-EX BKT 37";
  public text: string = "Machamp-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.clearSpecialConditions(this, store, state, effect).use(effect);
    }
    return state;
  }
}
