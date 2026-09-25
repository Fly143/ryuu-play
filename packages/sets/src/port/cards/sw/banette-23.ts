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

export class Banette_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ghost Head", cost: [], damage: "", text: "Put as many damage counters as you like on Banette. (You can't put more than Banette's remaining HP.) Put that many damage counters on the Defending Pokémon." },
      { name: "Spiteful Pain", cost: [], damage: "40+", text: "If Banette is in your discard pile, this attack does 40 damage plus 40 more damage, then search your discard pile for Banette, show it to your opponent, and shuffle it into your deck." }
  ];
  public set: string = "SW";
  public name: string = "Banette";
  public fullName: string = "Banette SW 23";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
