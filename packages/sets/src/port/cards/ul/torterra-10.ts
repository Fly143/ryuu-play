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

export class Torterra_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grotle";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Giga Drain", cost: [], damage: "40", text: "Remove from Torterra the number of damage counters equal to the damage you did to the Defending Pokémon." },
      { name: "Land Crush", cost: [], damage: "80", text: "" }
  ];
  public set: string = "UL";
  public name: string = "Torterra";
  public fullName: string = "Torterra UL 10";
  public text: string = "Torterra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
