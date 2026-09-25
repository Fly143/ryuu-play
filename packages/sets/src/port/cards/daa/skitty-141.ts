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

export class Skitty_141 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drawup Power", cost: [], damage: "", text: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Cat Kick", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Skitty";
  public fullName: string = "Skitty DAA 141";
  public text: string = "Skitty";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
