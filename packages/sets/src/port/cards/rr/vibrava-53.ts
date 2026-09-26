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

export class Vibrava_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trapinch";
  public hp: number = 70;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Typhoon", cost: [], damage: "20×", text: "Does 20 damage times the number of Energy cards in your opponent's discard pile. Then, put those Energy cards on top of your opponent's deck. Your opponent shuffles his or her deck afterward." },
      { name: "Quick Attack", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "RR";
  public name: string = "Vibrava";
  public fullName: string = "Vibrava RR 53";
  public text: string = "Vibrava";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
