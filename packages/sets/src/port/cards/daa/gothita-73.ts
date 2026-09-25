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

export class Gothita_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fortunate Eye", cost: [], damage: "", text: "Look at the top 5 cards of your opponent's deck and put them back in any order." },
      { name: "Gentle Slap", cost: [], damage: "30", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Gothita";
  public fullName: string = "Gothita DAA 73";
  public text: string = "Gothita";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
