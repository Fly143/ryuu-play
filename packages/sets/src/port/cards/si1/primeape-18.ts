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

export class Primeape_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mankey";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Low Kick", cost: [], damage: "20", text: "" },
      { name: "Rampage", cost: [], damage: "20+", text: "Does 20 damage plus 10 more damage for each damage counter on Primeape. Flip a coin. If tails, Primeape is now Confused (after doing damage)." }
  ];
  public set: string = "SI1";
  public name: string = "Primeape";
  public fullName: string = "Primeape SI1 18";
  public text: string = "Primeape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipHeadsSelfSpecial:CONFUSED");
    }
    return state;
  }
}
