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

export class Girafarig_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Patch", cost: [], damage: "", text: "Take a basic Energy card attached to 1 of your Pokémon and attach it to another of your Pokémon." },
      { name: "Syncroblast", cost: [], damage: "40", text: "If Girafarig and the Defending Pokémon don't have the same number of Energy cards attached to them, this attack's base damage is 10 instead of 40." }
  ];
  public set: string = "SK";
  public name: string = "Girafarig";
  public fullName: string = "Girafarig SK 58";
  public text: string = "Girafarig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
