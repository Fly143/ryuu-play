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

export class Tentacruel_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tentacool";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tentacle Strike", cost: [], damage: "", text: "Search your opponent's discard pile for up to 2 Energy cards and attach them to any of your opponent's Pokémon in any way you like. For each Energy card attached in this way, this attack does 20 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Dangerous Poison", cost: [], damage: "60", text: "If Tentacruel has less Energy attached to it than the Defending Pokémon, the Defending Pokémon is now Paralyzed and Poisoned." }
  ];
  public set: string = "SF";
  public name: string = "Tentacruel";
  public fullName: string = "Tentacruel SF 75";
  public text: string = "Tentacruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
