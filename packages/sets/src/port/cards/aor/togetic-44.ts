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

export class Togetic_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Togepi";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Go Fetch", cost: [], damage: "", text: "Shuffle 3 basic Energy cards from your discard pile into your deck." },
      { name: "Fairy Wind", cost: [], damage: "40", text: "" }
  ];
  public set: string = "AOR";
  public name: string = "Togetic";
  public fullName: string = "Togetic AOR 44";
  public text: string = "Togetic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
