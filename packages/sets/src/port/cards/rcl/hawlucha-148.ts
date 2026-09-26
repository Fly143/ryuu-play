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

export class Hawlucha_148 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Windfall", cost: [], damage: "", text: "Shuffle your hand into your deck. Then, draw 5 cards." },
      { name: "Speed Attack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Hawlucha";
  public fullName: string = "Hawlucha RCL 148";
  public text: string = "Hawlucha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
