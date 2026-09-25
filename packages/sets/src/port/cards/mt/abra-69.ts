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

export class Abra_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Play Search", cost: [], damage: "", text: "Look at the top 5 cards of your deck, choose 1 of them, and put it into your hand. Put the other 4 cards back on top of your deck. Shuffle your deck afterward." },
      { name: "Ultra Evolution", cost: [], damage: "", text: "Search your deck for Alakazam and put it on Abra (this counts as evolving Abra). Shuffle your deck afterward." }
  ];
  public set: string = "MT";
  public name: string = "Abra";
  public fullName: string = "Abra MT 69";
  public text: string = "Abra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
