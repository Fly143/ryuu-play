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

export class Crocalor_202 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fuecoco";
  public hp: number = 110;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Steady Firebreathing", cost: [], damage: "30", text: "" },
      { name: "Hyper Voice", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Crocalor";
  public fullName: string = "Crocalor PAL 202";
  public text: string = "Crocalor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
