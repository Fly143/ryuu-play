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

export class Oranguru_182 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sage's Riddle", cost: [], damage: "", text: "Put a Pokémon from your hand face down in front of you. Your opponent guesses the type of that Pokémon, and then you reveal it. If your opponent guessed right, they draw 4 cards. If they guessed wrong, you draw 4 cards. Return the Pokémon to your hand." },
      { name: "Gentle Slap", cost: [], damage: "80", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Oranguru";
  public fullName: string = "Oranguru CEC 182";
  public text: string = "Oranguru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
