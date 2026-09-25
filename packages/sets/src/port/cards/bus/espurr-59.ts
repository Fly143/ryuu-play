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

export class Espurr_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Perplexing Eyes", cost: [], damage: "", text: "The Defending Pokémon's Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn't change.)" }
  ];
  public set: string = "BUS";
  public name: string = "Espurr";
  public fullName: string = "Espurr BUS 59";
  public text: string = "Espurr";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
