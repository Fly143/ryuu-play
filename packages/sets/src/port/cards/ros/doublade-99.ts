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

export class Doublade_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Honedge";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "False Swipe", cost: [], damage: "", text: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10." },
      { name: "Slash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "ROS";
  public name: string = "Doublade";
  public fullName: string = "Doublade ROS 99";
  public text: string = "Doublade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
