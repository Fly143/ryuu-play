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

export class Bouffalant_114 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tool Breaker", cost: [], damage: "", text: "Discard a Pokémon Tool card attached to the Defending Pokémon." },
      { name: "Hammer In", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PLB";
  public name: string = "Bouffalant";
  public fullName: string = "Bouffalant PLB 114";
  public text: string = "Bouffalant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
