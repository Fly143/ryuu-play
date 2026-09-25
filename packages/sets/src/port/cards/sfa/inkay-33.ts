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

export class Inkay_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mischievous Tentacles", cost: [], damage: "", text: "Look at the top card of your opponent's deck. You may have your opponent shuffle their deck." },
      { name: "Peck", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Inkay";
  public fullName: string = "Inkay SFA 33";
  public text: string = "Inkay";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
