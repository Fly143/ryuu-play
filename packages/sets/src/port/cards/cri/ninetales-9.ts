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

export class Ninetales_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 120;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nine-Tailed Transfer", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon." },
      { name: "Will-O-Wisp", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales CRI 9";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
