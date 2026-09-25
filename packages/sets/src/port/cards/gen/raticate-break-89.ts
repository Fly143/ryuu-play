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

export class RaticateBREAK_89 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Raticate";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Super Fang", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10." }
  ];
  public set: string = "GEN";
  public name: string = "Raticate BREAK";
  public fullName: string = "Raticate BREAK GEN 89";
  public text: string = "Raticate BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
