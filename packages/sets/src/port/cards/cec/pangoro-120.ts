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

export class Pangoro_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pancham";
  public hp: number = 130;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Light Punch", cost: [], damage: "40", text: "" },
      { name: "Magnum Punch", cost: [], damage: "90", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Pangoro";
  public fullName: string = "Pangoro CEC 120";
  public text: string = "Pangoro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
