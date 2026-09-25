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

export class Sandslash_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sandshrew";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sand Trap", cost: [], damage: "10", text: "If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Poison Needle Rush", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokémon is now Poisoned." }
  ];
  public set: string = "SK";
  public name: string = "Sandslash";
  public fullName: string = "Sandslash SK 93";
  public text: string = "Sandslash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
    }
    return state;
  }
}
