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

export class LugiaV_186 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Read the Wind", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 3 cards." },
      { name: "Aero Dive", cost: [], damage: "130", text: "You may discard a Stadium in play." }
  ];
  public set: string = "PGO";
  public name: string = "Lugia V";
  public fullName: string = "Lugia V PGO 186";
  public text: string = "Lugia V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
