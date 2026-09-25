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

export class Linoone_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zigzagoon";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Seek Out", cost: [], damage: "", text: "Search your deck for up to 2 cards and put them into your hand. Shuffle your deck afterward." },
      { name: "Continuous Headbutt", cost: [], damage: "40×", text: "Flip a coin until you get tails. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "TK1B";
  public name: string = "Linoone";
  public fullName: string = "Linoone TK1B 3";
  public text: string = "Linoone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
