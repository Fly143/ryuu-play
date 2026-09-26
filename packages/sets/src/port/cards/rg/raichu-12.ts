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

export class Raichu_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 80;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Recharge", cost: [], damage: "", text: "Search your deck for up to 2 Lightning Energy cards and attach them to Raichu. Shuffle your deck afterward." },
      { name: "Thunder Reflection", cost: [], damage: "50", text: "You may move any number of Lightning Energy cards attached to Raichu to another of your Pokémon." }
  ];
  public set: string = "RG";
  public name: string = "Raichu";
  public fullName: string = "Raichu RG 12";
  public text: string = "Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
