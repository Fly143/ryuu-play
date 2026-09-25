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

export class Elgyem_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slight Shift", cost: [], damage: "", text: "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon." },
      { name: "Beam", cost: [], damage: "40", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Elgyem";
  public fullName: string = "Elgyem BLK 40";
  public text: string = "Elgyem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
