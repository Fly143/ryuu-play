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

export class Snorlax_332 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pick and Collect", cost: [], damage: "", text: "Search your discard pile for up to 4 basic Energy cards, show them to your opponent, and put them into your hand." },
      { name: "Roll Over", cost: [], damage: "60", text: "Flip a coin. If heads, both Snorlax and the Defending Pokémon are now Asleep. If tails, Snorlax is now Asleep." }
  ];
  public set: string = "RR";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax RR 33";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
