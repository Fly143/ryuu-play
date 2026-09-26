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

export class Stantler_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Terrorize", cost: [], damage: "", text: "If the Defending Pokémon is a Basic Pokémon, choose 1 of its attacks. That Pokémon can't use that attack during your opponent's next turn." },
      { name: "Overhead Toss", cost: [], damage: "30", text: "If you have any Benched Pokémon, flip a coin. If tails, this attack does 10 damage to 1 of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "N3";
  public name: string = "Stantler";
  public fullName: string = "Stantler N3 38";
  public text: string = "Stantler";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
