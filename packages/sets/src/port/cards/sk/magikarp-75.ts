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

export class Magikarp_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Signs of Evolution", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a card that evolves from Magikarp, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Splash", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SK";
  public name: string = "Magikarp";
  public fullName: string = "Magikarp SK 75";
  public text: string = "Magikarp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
