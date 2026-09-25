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

export class Smoochum_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Delightful Kiss", cost: [], damage: "", text: "Search your deck for up to 2 Basic Psychic Energy cards and attach them to 1 of your Benched Pokémon. Then, shuffle your deck." }
  ];
  public set: string = "SSP";
  public name: string = "Smoochum";
  public fullName: string = "Smoochum SSP 75";
  public text: string = "Smoochum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
