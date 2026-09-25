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

export class Bronzor_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Speed Dive", cost: [], damage: "10", text: "" },
      { name: "Extrasensory", cost: [], damage: "30+", text: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 30 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Bronzor";
  public fullName: string = "Bronzor AR 34";
  public text: string = "Bronzor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
