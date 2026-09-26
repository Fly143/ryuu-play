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

export class Hippowdon_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippopotas";
  public hp: number = 150;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sand Spray", cost: [], damage: "90", text: "" },
      { name: "Land Crush", cost: [], damage: "140", text: "" }
  ];
  public set: string = "PRE";
  public name: string = "Hippowdon";
  public fullName: string = "Hippowdon PRE 53";
  public text: string = "Hippowdon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
