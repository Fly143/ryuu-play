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

export class Heliolisk_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Helioptile";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pound", cost: [], damage: "30", text: "" },
      { name: "Parabolic Spark", cost: [], damage: "30×", text: "Discard as many Lightning Energy attached to your Pokémon as you like. This attack does 30 damage times the number of Energy cards you discarded." }
  ];
  public set: string = "PHF";
  public name: string = "Heliolisk";
  public fullName: string = "Heliolisk PHF 30";
  public text: string = "Heliolisk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
