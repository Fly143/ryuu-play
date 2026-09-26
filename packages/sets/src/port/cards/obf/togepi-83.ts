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

export class Togepi_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Whiny Voice", cost: [], damage: "", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck." },
      { name: "Rolling Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Togepi";
  public fullName: string = "Togepi OBF 83";
  public text: string = "Togepi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
