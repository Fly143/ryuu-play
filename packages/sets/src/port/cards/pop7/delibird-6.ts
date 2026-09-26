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

export class Delibird_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Present", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward." },
      { name: "Ice Ball", cost: [], damage: "20", text: "" }
  ];
  public set: string = "POP7";
  public name: string = "Delibird";
  public fullName: string = "Delibird POP7 6";
  public text: string = "Delibird";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
