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

export class Wishiwashi_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deep Sea Swirl", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 8 cards." },
      { name: "Wave Splash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Wishiwashi";
  public fullName: string = "Wishiwashi DAA 50";
  public text: string = "Wishiwashi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
