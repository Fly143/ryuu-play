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

export class Pikachu_422 extends PokemonCard {
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
      { name: "Charge-Up Dash", cost: [], damage: "", text: "Flip a coin until you get tails. Search your deck for an amount of Basic Lightning Energy up to the number of heads and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Pika Bolt", cost: [], damage: "50", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu 30C 42";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
