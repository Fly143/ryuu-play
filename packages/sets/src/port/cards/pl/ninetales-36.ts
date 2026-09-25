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

export class Ninetales_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vulpix";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flame Bash", cost: [], damage: "", text: "Flip a coin until you get tails. Search your deck for a number of basic Fire Energy cards up to the number of heads and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward." },
      { name: "Mysterious Flames", cost: [], damage: "40", text: "If you have more Energy in play than your opponent, the Defending Pokémon is now Burned and Confused." }
  ];
  public set: string = "PL";
  public name: string = "Ninetales";
  public fullName: string = "Ninetales PL 36";
  public text: string = "Ninetales";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
