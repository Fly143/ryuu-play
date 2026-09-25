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

export class Simisear_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pansear";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Light Punch", cost: [], damage: "20", text: "" },
      { name: "Fling Fire", cost: [], damage: "60×", text: "Discard up to 2 basic Energy cards from your hand. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "EVS";
  public name: string = "Simisear";
  public fullName: string = "Simisear EVS 38";
  public text: string = "Simisear";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
