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

export class Pikachu_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energized Tail", cost: [], damage: "", text: "Search your deck for an Energy card, reveal it, and put it into your hand. Then, shuffle your deck." },
      { name: "Pika Punch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu 30C 37";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
