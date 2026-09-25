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

export class Xerneas_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Breath of Life", cost: [], damage: "", text: "Search your deck for up to 3 basic Energy cards of different types and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Aurora Horns", cost: [], damage: "100", text: "" }
  ];
  public set: string = "CEL";
  public name: string = "Xerneas";
  public fullName: string = "Xerneas CEL 12";
  public text: string = "Xerneas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
