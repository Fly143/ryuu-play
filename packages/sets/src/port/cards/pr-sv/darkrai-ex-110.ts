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

export class DarkraiEx_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wind of Darkness", cost: [], damage: "40", text: "" },
      { name: "Night Impact", cost: [], damage: "110", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Darkrai ex";
  public fullName: string = "Darkrai ex PR-SV 110";
  public text: string = "Darkrai ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
