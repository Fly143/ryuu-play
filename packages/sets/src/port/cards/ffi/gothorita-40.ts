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

export class Gothorita_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothita";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fortunate Eye", cost: [], damage: "", text: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order." },
      { name: "Smack", cost: [], damage: "30", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Gothorita";
  public fullName: string = "Gothorita FFI 40";
  public text: string = "Gothorita";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
