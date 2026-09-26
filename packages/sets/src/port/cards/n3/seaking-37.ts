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

export class Seaking_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Goldeen";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rising Lunge", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage." },
      { name: "Horn Swipe", cost: [], damage: "20+", text: "Flip 2 coins. If both are heads, this attack does 20 damage plus 40 more damage. If 1 or both of them are tails, this attack does 20 damage." }
  ];
  public set: string = "N3";
  public name: string = "Seaking";
  public fullName: string = "Seaking N3 37";
  public text: string = "Seaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
