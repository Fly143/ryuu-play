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

export class Togedemaru_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Toge Dash", cost: [], damage: "10", text: "Flip a coin. If heads, during your opponent's next turn, if this Pokémon is Knocked Out, your opponent can't take any Prize cards for it." }
  ];
  public set: string = "PGO";
  public name: string = "Togedemaru";
  public fullName: string = "Togedemaru PGO 127";
  public text: string = "Togedemaru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
