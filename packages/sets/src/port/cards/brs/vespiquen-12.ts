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

export class Vespiquen_12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Honey Rush", cost: [], damage: "60×", text: "Reveal any number of Sweet Honey cards from your hand. This attack does 60 damage for each card you revealed in this way." },
      { name: "Pierce", cost: [], damage: "90", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen BRS 12";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
