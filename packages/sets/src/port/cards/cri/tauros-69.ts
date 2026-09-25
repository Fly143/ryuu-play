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

export class Tauros_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Target Together", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon and flip a coin for each of your Pokémon in play that has \"Tauros\" in its name. This attack does 50 damage to the chosen Pokémon for each heads. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "CRI";
  public name: string = "Tauros";
  public fullName: string = "Tauros CRI 69";
  public text: string = "Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
