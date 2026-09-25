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

export class Axew_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Signs of Evolution", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for Fraxure, reveal it, and put it into your hand, Shuffle your deck afterward." },
      { name: "Scratch", cost: [], damage: "10", text: "" }
  ];
  public set: string = "DRV";
  public name: string = "Axew";
  public fullName: string = "Axew DRV 12";
  public text: string = "Axew";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
