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

export class Furfrou_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hand Trim", cost: [], damage: "", text: "Discard random cards from your opponent's hand until they have 5 cards in their hand." },
      { name: "Headbutt", cost: [], damage: "30", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Furfrou";
  public fullName: string = "Furfrou POR 67";
  public text: string = "Furfrou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
