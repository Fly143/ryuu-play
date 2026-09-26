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

export class EmpoleonBREAKXY134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Empoleon";
  public hp: number = 170;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Emperor's Command", cost: [], damage: "30×", text: "This attack does 30 damage times the number of Pokémon your opponent has in play." }
  ];
  public set: string = "PR-XY";
  public name: string = "Empoleon BREAK";
  public fullName: string = "Empoleon BREAK PR-XY XY134";
  public text: string = "Empoleon BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
