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

export class Venomoth_2 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venonat";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Miracle Powder", cost: [], damage: "30", text: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition." },
      { name: "Gust", cost: [], damage: "70", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Venomoth";
  public fullName: string = "Venomoth PGO 2";
  public text: string = "Venomoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
