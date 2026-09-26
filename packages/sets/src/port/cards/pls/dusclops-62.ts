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

export class Dusclops_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duskull";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Astonish", cost: [], damage: "", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck." },
      { name: "Psyshot", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PLS";
  public name: string = "Dusclops";
  public fullName: string = "Dusclops PLS 62";
  public text: string = "Dusclops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
