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

export class Nidoran_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Growl", cost: [], damage: "", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance)." },
      { name: "Headbutt", cost: [], damage: "10", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Nidoran ♀";
  public fullName: string = "Nidoran ♀ 30C 87";
  public text: string = "Nidoran ♀";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
