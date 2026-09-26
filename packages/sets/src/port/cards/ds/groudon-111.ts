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

export class Groudon_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Critical Collection", cost: [], damage: "10", text: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Fighting Energy cards and attach them to Groudon Star." },
      { name: "Ground Slash", cost: [], damage: "80", text: "Discard a Fighting Energy card attached to Groudon Star." }
  ];
  public set: string = "DS";
  public name: string = "Groudon ★";
  public fullName: string = "Groudon ★ DS 111";
  public text: string = "Groudon ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
