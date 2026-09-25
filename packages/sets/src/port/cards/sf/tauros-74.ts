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

export class Tauros_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Herd Charge", cost: [], damage: "20×", text: "Flip a coin for each Tauros you have in play. This attack does 20 damage times the number of heads." },
      { name: "Thrash", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, Tauros does 10 damage to itself." }
  ];
  public set: string = "SF";
  public name: string = "Tauros";
  public fullName: string = "Tauros SF 74";
  public text: string = "Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
