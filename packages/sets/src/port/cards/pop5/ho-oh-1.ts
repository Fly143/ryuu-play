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

export class HoOh_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Wing", cost: [], damage: "20", text: "" },
      { name: "Fire Blast", cost: [], damage: "60", text: "Discard a Fire Energy attached to Ho-Oh." }
  ];
  public set: string = "POP5";
  public name: string = "Ho-Oh";
  public fullName: string = "Ho-Oh POP5 1";
  public text: string = "Ho-Oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
