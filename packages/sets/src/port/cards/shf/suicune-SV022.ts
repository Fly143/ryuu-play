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

export class SuicuneSV022 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "20", text: "" },
      { name: "Aurora Loop", cost: [], damage: "130", text: "Put 2 Water Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "SHF";
  public name: string = "Suicune";
  public fullName: string = "Suicune SHF SV022";
  public text: string = "Suicune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
