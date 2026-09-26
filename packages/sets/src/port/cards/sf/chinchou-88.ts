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

export class Chinchou_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Razor Fin", cost: [], damage: "10", text: "" },
      { name: "Aqua Spark", cost: [], damage: "20+", text: "If Chinchou has any Water Energy attached to it, this attack does 20 damage plus 10 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Chinchou";
  public fullName: string = "Chinchou SF 88";
  public text: string = "Chinchou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
