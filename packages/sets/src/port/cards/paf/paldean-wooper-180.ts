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

export class PaldeanWooper_180 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Find a Home", cost: [], damage: "", text: "Search your deck for a Stadium card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Ram", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Paldean Wooper";
  public fullName: string = "Paldean Wooper PAF 180";
  public text: string = "Paldean Wooper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
