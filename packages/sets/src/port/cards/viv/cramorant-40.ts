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

export class Cramorant_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Continuous Gulp Missile", cost: [], damage: "60×", text: "Discard any number of Arrokuda from your Bench. This attack does 60 damage for each Arrokuda you discarded in this way." }
  ];
  public set: string = "VIV";
  public name: string = "Cramorant";
  public fullName: string = "Cramorant VIV 40";
  public text: string = "Cramorant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
