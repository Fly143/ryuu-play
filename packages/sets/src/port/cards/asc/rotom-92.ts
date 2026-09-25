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

export class Rotom_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roto Call", cost: [], damage: "", text: "You may search your deck for any number of Pokémon that have \"Rotom\" in their name and put them onto your Bench. Then, shuffle your deck." },
      { name: "Gadget Show", cost: [], damage: "30×", text: "This attack does 30 damage for each Pokémon Tool attached to all of your Pokémon." }
  ];
  public set: string = "ASC";
  public name: string = "Rotom";
  public fullName: string = "Rotom ASC 92";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
