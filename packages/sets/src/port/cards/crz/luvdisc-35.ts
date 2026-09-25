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

export class Luvdisc_352 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Emotional Draw", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 5 cards." },
      { name: "Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CRZ";
  public name: string = "Luvdisc";
  public fullName: string = "Luvdisc CRZ 35";
  public text: string = "Luvdisc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
