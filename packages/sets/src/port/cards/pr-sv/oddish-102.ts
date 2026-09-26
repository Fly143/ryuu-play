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

export class Oddish_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Razor Leaf", cost: [], damage: "10", text: "" },
      { name: "Grass Knot", cost: [], damage: "20×", text: "This attack does 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "PR-SV";
  public name: string = "Oddish";
  public fullName: string = "Oddish PR-SV 102";
  public text: string = "Oddish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
