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

export class Wartortle_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Squirtle";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Giant Wave", cost: [], damage: "40", text: "Wartortle can't use Giant Wave during your next turn." },
      { name: "Shell Attack", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SW";
  public name: string = "Wartortle";
  public fullName: string = "Wartortle SW 75";
  public text: string = "Wartortle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
