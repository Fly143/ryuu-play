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

export class Gothorita_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothita";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fortunate Eye", cost: [], damage: "", text: "Look at the top 5 cards of your opponent's deck and put them back in any order." },
      { name: "Psyshot", cost: [], damage: "40", text: "" }
  ];
  public set: string = "WHT";
  public name: string = "Gothorita";
  public fullName: string = "Gothorita WHT 125";
  public text: string = "Gothorita";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
