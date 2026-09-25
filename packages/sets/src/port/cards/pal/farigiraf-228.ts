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

export class Farigiraf_228 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Girafarig";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Either Face", cost: [], damage: "", text: "Choose a player. That player shuffles their hand into their deck and draws 4 cards." },
      { name: "Power Beam", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Farigiraf";
  public fullName: string = "Farigiraf PAL 228";
  public text: string = "Farigiraf";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
