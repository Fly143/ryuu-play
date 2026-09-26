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

export class Mienfoo_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pound", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PLS";
  public name: string = "Mienfoo";
  public fullName: string = "Mienfoo PLS 87";
  public text: string = "Mienfoo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
