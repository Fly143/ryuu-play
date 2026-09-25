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

export class SabrinaSMrMime_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sleight of Hand", cost: [], damage: "", text: "Choose up to 3 cards from your hand and put them on top of your deck. Then search your deck for that many basic Energy cards. Show those cards to your opponent, then put them into your hand. Shuffle your deck afterward." },
      { name: "Slap", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Mr. Mime";
  public fullName: string = "Sabrina's Mr. Mime G1 94";
  public text: string = "Sabrina's Mr. Mime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
