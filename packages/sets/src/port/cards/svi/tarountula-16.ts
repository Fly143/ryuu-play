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

export class Tarountula_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "String Haul", cost: [], damage: "", text: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot." },
      { name: "Bug Bite", cost: [], damage: "10", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Tarountula";
  public fullName: string = "Tarountula SVI 16";
  public text: string = "Tarountula";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
