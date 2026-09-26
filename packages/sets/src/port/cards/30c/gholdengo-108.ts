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

export class Gholdengo_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gimmighoul";
  public hp: number = 130;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Celebration", cost: [], damage: "", text: "if you have exactly 30 cards in your hand, take 2 Prize cards. If you do, shuffle your hand into your deck." },
      { name: "Triple Smash", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage for each heads." }
  ];
  public set: string = "30C";
  public name: string = "Gholdengo";
  public fullName: string = "Gholdengo 30C 108";
  public text: string = "Gholdengo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    return state;
  }
}
