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

export class Druddigon_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dragon's Fury", cost: [], damage: "20", text: "Attach a Basic Fire Energy card from your discard pile to 1 of your Dragon Pokémon." },
      { name: "Slashing Claw", cost: [], damage: "120", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Druddigon";
  public fullName: string = "Druddigon JTG 115";
  public text: string = "Druddigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
