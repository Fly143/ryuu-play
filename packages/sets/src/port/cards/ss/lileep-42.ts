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

export class Lileep_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Root Fossil";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Influence", cost: [], damage: "", text: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon." },
      { name: "Time Spiral", cost: [], damage: "", text: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, remove the highest Stage Evolution card on that Pokémon and have your opponent shuffle it into his or her deck." }
  ];
  public set: string = "SS";
  public name: string = "Lileep";
  public fullName: string = "Lileep SS 42";
  public text: string = "Lileep";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
