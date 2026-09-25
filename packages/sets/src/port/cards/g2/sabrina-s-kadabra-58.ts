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

export class SabrinaSKadabra_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Abra";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Life Drain", cost: [], damage: "", text: "Flip a coin. If heads, put a number of damage counters on the Defending Pokémon so that its remaining HP are 10." },
      { name: "Psyshot", cost: [], damage: "30", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Kadabra";
  public fullName: string = "Sabrina's Kadabra G2 58";
  public text: string = "Sabrina's Kadabra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
