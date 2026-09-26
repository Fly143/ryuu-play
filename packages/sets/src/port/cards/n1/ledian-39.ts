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

export class Ledian_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ledyba";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Baton Pass", cost: [], damage: "30", text: "If you have any Grass Pokémon on your Bench, remove all Grass Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon." }
  ];
  public set: string = "N1";
  public name: string = "Ledian";
  public fullName: string = "Ledian N1 39";
  public text: string = "Ledian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
