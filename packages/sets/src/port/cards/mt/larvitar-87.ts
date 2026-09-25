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

export class Larvitar_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Bite", cost: [], damage: "10+", text: "You may discard the top card of your deck. If you do, this attack does 10 damage plus 10 more damage and Larvitar is now Asleep." },
      { name: "Hammer In", cost: [], damage: "20", text: "" }
  ];
  public set: string = "MT";
  public name: string = "Larvitar";
  public fullName: string = "Larvitar MT 87";
  public text: string = "Larvitar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
