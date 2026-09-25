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

export class Mareep_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Static Electricity", cost: [], damage: "", text: "Search your deck for a number of Lightning Energy cards up to the number of Mareep in play (both yours and your opponent's) and attach them to Mareep. Shuffle your deck afterward." },
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "HS";
  public name: string = "Mareep";
  public fullName: string = "Mareep HS 73";
  public text: string = "Mareep";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
