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

export class Chespin_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vine Whip", cost: [], damage: "10", text: "" },
      { name: "Seed Bomb", cost: [], damage: "20", text: "" }
  ];
  public set: string = "MCD21";
  public name: string = "Chespin";
  public fullName: string = "Chespin MCD21 6";
  public text: string = "Chespin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
