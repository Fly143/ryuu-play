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

export class Rhyhorn_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Push Down", cost: [], damage: "20", text: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)" },
      { name: "Boulder Crush", cost: [], damage: "70", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Rhyhorn";
  public fullName: string = "Rhyhorn MEW 111";
  public text: string = "Rhyhorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
