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

export class Salamence_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shelgon";
  public hp: number = 110;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fire Dance", cost: [], damage: "30", text: "Search your discard pile for a Fire Energy card and attach it to 1 of your Pokémon." },
      { name: "Delta Blast", cost: [], damage: "100", text: "Discard a Metal Energy card attached to Salamence." }
  ];
  public set: string = "DS";
  public name: string = "Salamence δ";
  public fullName: string = "Salamence δ DS 14";
  public text: string = "Salamence δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
