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

export class Flapple_139 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Applin";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Acidic Spit", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon." },
      { name: "Speed Dive", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Flapple";
  public fullName: string = "Flapple SSP 139";
  public text: string = "Flapple";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
