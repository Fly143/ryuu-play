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

export class Snubbull_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "10", text: "" },
      { name: "Raging Headbutt", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 damage times the number of damage counters on Snubbull. If tails, this attack does 10 damage." }
  ];
  public set: string = "N3";
  public name: string = "Snubbull";
  public fullName: string = "Snubbull N3 55";
  public text: string = "Snubbull";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
