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

export class Minccino_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Glance", cost: [], damage: "", text: "Look at the top card of your opponent's deck." },
      { name: "Tail Slap", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage for each heads." }
  ];
  public set: string = "SSH";
  public name: string = "Minccino";
  public fullName: string = "Minccino SSH 145";
  public text: string = "Minccino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    return state;
  }
}
