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

export class Kyogre_112 extends PokemonCard {
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
      { name: "Critical Collection", cost: [], damage: "10", text: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre Star." },
      { name: "Sheer Cold", cost: [], damage: "60", text: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "DS";
  public name: string = "Kyogre ★";
  public fullName: string = "Kyogre ★ DS 112";
  public text: string = "Kyogre ★";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
