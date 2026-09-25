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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Garbodor_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trubbish";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ensnarl", cost: [], damage: "20×", text: "Does 20 damage times the number of Colorless in the Defending Pokémon's Retreat Cost." },
      { name: "Double Ducts", cost: [], damage: "80×", text: "Flip 2 coins. This attack does 80 damage times the number of heads." }
  ];
  public set: string = "PLB";
  public name: string = "Garbodor";
  public fullName: string = "Garbodor PLB 67";
  public text: string = "Garbodor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesRetreatColorless:20 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 80);
    }
    return state;
  }
}
