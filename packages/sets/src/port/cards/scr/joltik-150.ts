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

export class Joltik_150 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Jolting Charge", cost: [], damage: "", text: "Search your deck for up to 2 Basic Grass Energy cards and up to 2 Basic Lightning Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." }
  ];
  public set: string = "SCR";
  public name: string = "Joltik";
  public fullName: string = "Joltik SCR 150";
  public text: string = "Joltik";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
