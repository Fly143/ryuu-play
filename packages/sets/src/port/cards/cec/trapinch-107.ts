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

export class Trapinch_107 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nest Building", cost: [], damage: "", text: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Sand Spray", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Trapinch";
  public fullName: string = "Trapinch CEC 107";
  public text: string = "Trapinch";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
