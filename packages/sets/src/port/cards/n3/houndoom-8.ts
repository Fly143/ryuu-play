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

export class Houndoom_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Houndour";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dark Flame", cost: [], damage: "20", text: "Discard 1 Fire Energy card attached to Houndoom or this attack does nothing. If there are any Darkness Energy cards in your discard pile, attach 1 of them to Houndoom." },
      { name: "Black Fang", cost: [], damage: "30+", text: "Flip a number of coins equal to the number of Darkness Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads." }
  ];
  public set: string = "N3";
  public name: string = "Houndoom";
  public fullName: string = "Houndoom N3 8";
  public text: string = "Houndoom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
