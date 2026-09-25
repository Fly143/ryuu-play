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

export class MistySTentacool_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crystal Beam", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent can't attach Energy cards to the Defending Pokémon during his or her next turn." }
  ];
  public set: string = "G1";
  public name: string = "Misty's Tentacool";
  public fullName: string = "Misty's Tentacool G1 57";
  public text: string = "Misty's Tentacool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
