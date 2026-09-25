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

export class MistySPoliwrath_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Poliwhirl";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Ring", cost: [], damage: "30", text: "Does 10 damage to each Pokémon that isn't Water on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G1";
  public name: string = "Misty's Poliwrath";
  public fullName: string = "Misty's Poliwrath G1 31";
  public text: string = "Misty's Poliwrath";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
