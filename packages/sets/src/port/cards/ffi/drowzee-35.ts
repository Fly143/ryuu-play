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

export class Drowzee_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sinister Suggestion", cost: [], damage: "", text: "Whenever your opponent flips a coin during his or her next turn, treat it as tails." },
      { name: "Psyshot", cost: [], damage: "20", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee FFI 35";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
