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

export class Sigilyph_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Warning", cost: [], damage: "", text: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck. If your opponent's Active Pokémon is a Pokémon V, you may put up to 5 Basic Pokémon onto your Bench in this way instead." },
      { name: "Cutting Wind", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Sigilyph";
  public fullName: string = "Sigilyph PGO 75";
  public text: string = "Sigilyph";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
