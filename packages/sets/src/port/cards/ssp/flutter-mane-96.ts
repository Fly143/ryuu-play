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

export class FlutterMane_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Perplexing Transfer", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Ancient Pokémon to your opponent's Active Pokémon." },
      { name: "Moonblast", cost: [], damage: "70", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "SSP";
  public name: string = "Flutter Mane";
  public fullName: string = "Flutter Mane SSP 96";
  public text: string = "Flutter Mane";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
