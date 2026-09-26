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

export class RayquazaEx_972 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spiral Growth", cost: [], damage: "", text: "Flip a coin until you get tails. For each heads, search your discard pile for a basic Energy card and attach it to Rayquaza ex." },
      { name: "Dragon Burst", cost: [], damage: "40×", text: "Discard either all Fire Energy or all Lightning Energy attached to Rayquaza ex. This attack does 40 damage times the amount of Fire or Lightning Energy discarded." }
  ];
  public set: string = "DR";
  public name: string = "Rayquaza ex";
  public fullName: string = "Rayquaza ex DR 97";
  public text: string = "Rayquaza ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
