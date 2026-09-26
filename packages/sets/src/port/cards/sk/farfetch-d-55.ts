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

export class FarfetchD_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whirlwind", cost: [], damage: "", text: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon." },
      { name: "Leek Rush", cost: [], damage: "10×", text: "Flip a coin until you get tails. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "SK";
  public name: string = "Farfetch'd";
  public fullName: string = "Farfetch'd SK 55";
  public text: string = "Farfetch'd";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
