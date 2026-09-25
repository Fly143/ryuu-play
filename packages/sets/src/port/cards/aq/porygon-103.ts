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

export class Porygon_103 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Data Sort", cost: [], damage: "", text: "Flip a coin. If heads, choose a Trainer card from your discard pile, show it to your opponent, and then shuffle it into your deck." },
      { name: "Peck", cost: [], damage: "10", text: "" }
  ];
  public set: string = "AQ";
  public name: string = "Porygon";
  public fullName: string = "Porygon AQ 103";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
