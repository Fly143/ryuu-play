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

export class Wurmple_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sting", cost: [], damage: "10", text: "" },
      { name: "Creepy-Crawly Congregation", cost: [], damage: "", text: "Search your deck for any number of Wurmple, Silcoon, Beautifly, Cascoon, and Dustox, reveal them, and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "ASR";
  public name: string = "Wurmple";
  public fullName: string = "Wurmple ASR 6";
  public text: string = "Wurmple";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
