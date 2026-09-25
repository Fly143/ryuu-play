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

export class Venonat_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Radar Eyes", cost: [], damage: "", text: "Look at the top 7 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck." },
      { name: "Flop", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UNM";
  public name: string = "Venonat";
  public fullName: string = "Venonat UNM 9";
  public text: string = "Venonat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
