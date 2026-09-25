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

export class Tatsugiri_127 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mise en Place", cost: [], damage: "", text: "Search your deck for up to 2 Basic Water Energy cards and attach them to 1 of your Basic Pokémon. Then, shuffle your deck." },
      { name: "Curl Up", cost: [], damage: "30", text: "Put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "PAF";
  public name: string = "Tatsugiri";
  public fullName: string = "Tatsugiri PAF 127";
  public text: string = "Tatsugiri";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
