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

export class HoopaXY90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Summoning Draw", cost: [], damage: "", text: "If Pikachu is on your Bench, draw 3 cards." },
      { name: "Double Spin", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "PR-XY";
  public name: string = "Hoopa";
  public fullName: string = "Hoopa PR-XY XY90";
  public text: string = "Hoopa";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    return state;
  }
}
