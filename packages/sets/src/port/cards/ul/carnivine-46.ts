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

export class Carnivine_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drawup Power", cost: [], damage: "", text: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward." },
      { name: "Spit Up", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UL";
  public name: string = "Carnivine";
  public fullName: string = "Carnivine UL 46";
  public text: string = "Carnivine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
