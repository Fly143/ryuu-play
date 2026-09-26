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

export class Kangaskhan_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 2.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Baby Outing", cost: [], damage: "", text: "Look at the top 3 cards of your deck, and then choose 1 of those cards and put it into your hand. Shuffle the rest into your deck afterward." },
      { name: "Mega Punch", cost: [], damage: "30", text: "" }
  ];
  public set: string = "AQ";
  public name: string = "Kangaskhan";
  public fullName: string = "Kangaskhan AQ 88";
  public text: string = "Kangaskhan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
