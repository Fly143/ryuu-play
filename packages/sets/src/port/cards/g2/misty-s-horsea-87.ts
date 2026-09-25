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

export class MistySHorsea_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ink Spurt", cost: [], damage: "20", text: "Flip a coin. If heads, whenever the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (This effect lasts until the Defending Pokémon evolves or is Benched.)" }
  ];
  public set: string = "G2";
  public name: string = "Misty's Horsea";
  public fullName: string = "Misty's Horsea G2 87";
  public text: string = "Misty's Horsea";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
