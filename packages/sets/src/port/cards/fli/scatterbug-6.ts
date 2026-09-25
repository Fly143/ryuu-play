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

export class Scatterbug_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ultra Evolution", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for Vivillon and put it onto this Scatterbug to evolve it. Then, shuffle your deck." }
  ];
  public set: string = "FLI";
  public name: string = "Scatterbug";
  public fullName: string = "Scatterbug FLI 6";
  public text: string = "Scatterbug";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
