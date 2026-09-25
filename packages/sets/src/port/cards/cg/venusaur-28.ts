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

export class Venusaur_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ivysaur";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Chlorophyll", powerType: PowerType.ABILITY, text: "All Energy cards that provide only Colorless Energy attached to your Grass Pokémon provide Grass Energy instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Green Blast", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each Grass Energy attached to all of your Pokémon." },
      { name: "Toxic Sleep", cost: [], damage: "", text: "The Defending Pokémon is now Asleep and Poisoned. Put 2 damage counters instead of 1 on the Defending Pokémon between turns." }
  ];
  public set: string = "CG";
  public name: string = "Venusaur";
  public fullName: string = "Venusaur CG 28";
  public text: string = "Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
