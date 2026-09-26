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

export class Kingambit_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bisharp";
  public hp: number = 170;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Elbow Strike", cost: [], damage: "40", text: "" },
      { name: "Slicing Blade", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Kingambit";
  public fullName: string = "Kingambit PR-SV 113";
  public text: string = "Kingambit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
