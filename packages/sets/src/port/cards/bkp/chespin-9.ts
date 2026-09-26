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

export class Chespin_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tree Climb", cost: [], damage: "", text: "Search your deck for a Grass Energy card, reveal it, and put it into your hand. Shuffle your deck afterward." },
      { name: "Seed Bomb", cost: [], damage: "30", text: "" }
  ];
  public set: string = "BKP";
  public name: string = "Chespin";
  public fullName: string = "Chespin BKP 9";
  public text: string = "Chespin";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
