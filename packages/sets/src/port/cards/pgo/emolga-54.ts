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

export class Emolga_54 extends PokemonCard {
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
      { name: "Lucky Find", cost: [], damage: "", text: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Static Shock", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Emolga";
  public fullName: string = "Emolga PGO 54";
  public text: string = "Emolga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
