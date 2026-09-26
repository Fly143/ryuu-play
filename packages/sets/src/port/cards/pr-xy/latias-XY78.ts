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

export class LatiasXY78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eon Connection", cost: [], damage: "", text: "Draw a card. If Latios is on your Bench, draw 1 more card." },
      { name: "Speed Wing", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PR-XY";
  public name: string = "Latias";
  public fullName: string = "Latias PR-XY XY78";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
