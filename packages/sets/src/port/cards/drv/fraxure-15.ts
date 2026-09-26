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

export class Fraxure_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Axew";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "20", text: "" },
      { name: "Sharp Fang", cost: [], damage: "40", text: "" }
  ];
  public set: string = "DRV";
  public name: string = "Fraxure";
  public fullName: string = "Fraxure DRV 15";
  public text: string = "Fraxure";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
