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

export class SabrinaSHypno_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Drowzee";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Invigorate", cost: [], damage: "", text: "Choose 1 Basic Pokémon in any player's discard pile. Put it onto that player's Bench. Put a number of damage counters on that Pokémon equal to half its HP (rounded down to the nearest 10). (You can't put a Pokémon on a Bench that's full.)" },
      { name: "Pendulum Curse", cost: [], damage: "20×", text: "Flip a number of coins equal to the number of damage counters on the Defending Pokémon. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Hypno";
  public fullName: string = "Sabrina's Hypno G2 56";
  public text: string = "Sabrina's Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
