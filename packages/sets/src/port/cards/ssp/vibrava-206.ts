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

export class Vibrava_206 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trapinch";
  public hp: number = 90;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Screech", cost: [], damage: "", text: "During your next turn, the Defending Pokémon takes 50 more damage from attacks (after applying Weakness and Resistance)." },
      { name: "Cutting Wind", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Vibrava";
  public fullName: string = "Vibrava SSP 206";
  public text: string = "Vibrava";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
