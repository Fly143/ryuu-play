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

export class Magneton_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnemite";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tri Attack", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads." },
      { name: "Magnetic Ray", cost: [], damage: "40", text: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon that has any Energy attached to it and switch that Pokémon with 1 of the Defending Pokémon." }
  ];
  public set: string = "DP";
  public name: string = "Magneton";
  public fullName: string = "Magneton DP 54";
  public text: string = "Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
    }
    return state;
  }
}
