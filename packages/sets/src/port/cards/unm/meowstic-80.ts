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

export class Meowstic_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Espurr";
  public hp: number = 90;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Caturday", cost: [], damage: "", text: "Draw 3 cards. If you do, this Pokémon is now Asleep." },
      { name: "Perplexing Eyes", cost: [], damage: "70", text: "The Defending Pokémon's Weakness is now Psychic until the end of your next turn. (The amount of Weakness doesn't change.)" }
  ];
  public set: string = "UNM";
  public name: string = "Meowstic";
  public fullName: string = "Meowstic UNM 80";
  public text: string = "Meowstic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
