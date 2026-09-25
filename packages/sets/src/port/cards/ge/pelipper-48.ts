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

export class Pelipper_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wingull";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Guzzle", cost: [], damage: "", text: "Choose up to 2 basic Water Energy cards from your hand and attach them to Pelipper. Remove 2 damage counters for each Energy card attached in this way." },
      { name: "Jet Return", cost: [], damage: "30×", text: "Does 30 times the number of Energy cards attached to Pelipper. Then, put all Energy cards attached to Pelipper on top of your deck. Shuffle your deck afterward." }
  ];
  public set: string = "GE";
  public name: string = "Pelipper";
  public fullName: string = "Pelipper GE 48";
  public text: string = "Pelipper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
