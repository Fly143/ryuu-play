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

export class Luvdisc_392 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Synchrodraw", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand." },
      { name: "Water Gun", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Luvdisc";
  public fullName: string = "Luvdisc CRE 39";
  public text: string = "Luvdisc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
