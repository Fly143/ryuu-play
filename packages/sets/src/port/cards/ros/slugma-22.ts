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

export class Slugma_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grass Fire", cost: [], damage: "", text: "Discard a Grass Energy attached to your opponent's Active Pokémon." },
      { name: "Ram", cost: [], damage: "30", text: "" }
  ];
  public set: string = "ROS";
  public name: string = "Slugma";
  public fullName: string = "Slugma ROS 22";
  public text: string = "Slugma";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
