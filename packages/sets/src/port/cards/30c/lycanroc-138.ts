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

export class Lycanroc_138 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rockruff";
  public hp: number = 130;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter", cost: [], damage: "10+", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage." },
      { name: "Boulder Crush", cost: [], damage: "80", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Lycanroc";
  public fullName: string = "Lycanroc 30C 138";
  public text: string = "Lycanroc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
