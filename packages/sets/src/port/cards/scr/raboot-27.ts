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

export class Raboot_272 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scorbunny";
  public hp: number = 90;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Low Sweep", cost: [], damage: "30", text: "" },
      { name: "Combustion", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SCR";
  public name: string = "Raboot";
  public fullName: string = "Raboot SCR 27";
  public text: string = "Raboot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
