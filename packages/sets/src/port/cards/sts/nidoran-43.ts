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

export class Nidoran_432 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Come Along", cost: [], damage: "", text: "Search your deck for Nidoran ♀ and put it onto your Bench. Shuffle your deck afterward." },
      { name: "Peck", cost: [], damage: "20", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Nidoran ♂";
  public fullName: string = "Nidoran ♂ STS 43";
  public text: string = "Nidoran ♂";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
