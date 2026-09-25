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

export class Kyurem_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Extreme Freeze", cost: [], damage: "60×", text: "Discard any amount of Water Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "CRE";
  public name: string = "Kyurem";
  public fullName: string = "Kyurem CRE 116";
  public text: string = "Kyurem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
