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

export class Snubbull_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scary Face", cost: [], damage: "", text: "Flip a coin. If heads, until the end of your opponent's next turn the Defending Pokémon can't attack or retreat." },
      { name: "Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SK";
  public name: string = "Snubbull";
  public fullName: string = "Snubbull SK 101";
  public text: string = "Snubbull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
