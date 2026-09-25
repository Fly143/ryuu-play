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

export class Oranguru_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Now You're in My Power", cost: [], damage: "", text: "Until the end of your next turn, the Defending Pokémon's Weakness is now Colorless. (The amount of Weakness doesn't change.)" },
      { name: "Smack", cost: [], damage: "80", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Oranguru";
  public fullName: string = "Oranguru SSP 156";
  public text: string = "Oranguru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
