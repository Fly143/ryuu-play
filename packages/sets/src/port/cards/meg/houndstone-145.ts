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

export class Houndstone_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Greavard";
  public hp: number = 140;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horrifying Bite", cost: [], damage: "30", text: "Flip a coin until you get tails. For each heads, choose a random card from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck." },
      { name: "Hammer In", cost: [], damage: "130", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Houndstone";
  public fullName: string = "Houndstone MEG 145";
  public text: string = "Houndstone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
