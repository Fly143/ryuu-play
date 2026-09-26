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

export class Noctowl_120 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hoothoot";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "High Flight", cost: [], damage: "20×", text: "Each player reveals his or her hand. This attack does 20 damage times the number of Item cards revealed." },
      { name: "Speed Dive", cost: [], damage: "70", text: "" }
  ];
  public set: string = "BKP";
  public name: string = "Noctowl";
  public fullName: string = "Noctowl BKP 120";
  public text: string = "Noctowl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
