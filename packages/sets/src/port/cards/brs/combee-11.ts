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

export class Combee_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Honey Courier", cost: [], damage: "", text: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Bug Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Combee";
  public fullName: string = "Combee BRS 11";
  public text: string = "Combee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
