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

export class ErikaSClefairy_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lunar Power", cost: [], damage: "", text: "Flip a coin. If heads, search your deck for a card that evolves from 1 of your Benched Pokémon and put that card on that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward." },
      { name: "Moon Kick", cost: [], damage: "20", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Erika's Clefairy";
  public fullName: string = "Erika's Clefairy G2 40";
  public text: string = "Erika's Clefairy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
