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

export class Mew_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rainbow Wave", cost: [], damage: "", text: "Choose a type of Energy other than Colorless attached to Mew. This attack does 20 damage to each of your opponent's Pokémon of that type (including Benched Pokémon). Don't apply Weakness and Resistance." }
  ];
  public set: string = "SI1";
  public name: string = "Mew";
  public fullName: string = "Mew SI1 1";
  public text: string = "Mew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
