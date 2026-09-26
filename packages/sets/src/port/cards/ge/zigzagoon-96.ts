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

export class Zigzagoon_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pull Out", cost: [], damage: "", text: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck." },
      { name: "Double Stab", cost: [], damage: "10×", text: "Flip 2 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "GE";
  public name: string = "Zigzagoon";
  public fullName: string = "Zigzagoon GE 96";
  public text: string = "Zigzagoon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 10);
    }
    return state;
  }
}
