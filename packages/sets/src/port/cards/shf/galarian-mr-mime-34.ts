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

export class GalarianMrMime_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pound", cost: [], damage: "10", text: "" },
      { name: "Find It", cost: [], damage: "", text: "Search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck." }
  ];
  public set: string = "SHF";
  public name: string = "Galarian Mr. Mime";
  public fullName: string = "Galarian Mr. Mime SHF 34";
  public text: string = "Galarian Mr. Mime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
