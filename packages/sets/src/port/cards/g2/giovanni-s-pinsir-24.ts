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

export class GiovanniSPinsir_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Snapping Pincers", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage; if tails, this attack does 10 damage." },
      { name: "Overhead Toss", cost: [], damage: "40", text: "If you have any Benched Pokémon, flip a coin. If tails, choose 1 of your Benched Pokémon. This attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Pinsir";
  public fullName: string = "Giovanni's Pinsir G2 24";
  public text: string = "Giovanni's Pinsir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
