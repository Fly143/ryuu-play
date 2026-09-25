import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class Barbaracle_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Binacle";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Rush", cost: [], damage: "30×", text: "Discard as many Fighting Energy cards as you like from your hand. This attack does 30 damage times the number of Energy cards you discarded." },
      { name: "Boulder Crush", cost: [], damage: "80", text: "" }
  ];
  public set: string = "FLF";
  public name: string = "Barbaracle";
  public fullName: string = "Barbaracle FLF 49";
  public text: string = "Barbaracle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
