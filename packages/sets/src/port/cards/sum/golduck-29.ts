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

export class Golduck_292 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 90;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "20", text: "" },
      { name: "Double Jet", cost: [], damage: "60×", text: "Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "SUM";
  public name: string = "Golduck";
  public fullName: string = "Golduck SUM 29";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
