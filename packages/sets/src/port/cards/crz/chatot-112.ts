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

export class Chatot_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cycle Draw", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 2 cards." },
      { name: "Flap", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Chatot";
  public fullName: string = "Chatot CRZ 112";
  public text: string = "Chatot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
