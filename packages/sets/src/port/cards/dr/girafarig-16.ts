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

export class Girafarig_162 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Synchronized Search", cost: [], damage: "", text: "If Girafarig and the Defending Pokémon have the same amount of Energy attached to them, pick any 1 card from your deck and put it into your hand. Shuffle your deck afterward." },
      { name: "Breaking Impact", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. This attack does 10 damage for each Colorless Energy in that Pokémon's Retreat Cost to that Pokémon (after applying effects to the Retreat Cost). (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DR";
  public name: string = "Girafarig";
  public fullName: string = "Girafarig DR 16";
  public text: string = "Girafarig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
