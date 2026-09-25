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

export class Glameow_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Act Cute", cost: [], damage: "", text: "Your opponent puts a card from his or her hand on the bottom of his or her deck." },
      { name: "Scratch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "GEN";
  public name: string = "Glameow";
  public fullName: string = "Glameow GEN 93";
  public text: string = "Glameow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
