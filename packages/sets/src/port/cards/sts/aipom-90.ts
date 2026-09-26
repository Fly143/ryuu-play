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

export class Aipom_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fiddle Around", cost: [], damage: "", text: "Look at the top 3 cards of your opponent's deck and put them back in any order." },
      { name: "Tail Jab", cost: [], damage: "20", text: "" }
  ];
  public set: string = "STS";
  public name: string = "Aipom";
  public fullName: string = "Aipom STS 90";
  public text: string = "Aipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
