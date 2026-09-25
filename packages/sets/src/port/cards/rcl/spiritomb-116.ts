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

export class Spiritomb_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Splitting Spite", cost: [], damage: "", text: "Discard the top card of each player's deck." },
      { name: "Dripping Grudge", cost: [], damage: "", text: "Put 1 damage counter on your opponent's Active Pokémon for each Pokémon in your discard pile." }
  ];
  public set: string = "RCL";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb RCL 116";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
