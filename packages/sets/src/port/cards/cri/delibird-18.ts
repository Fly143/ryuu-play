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

export class Delibird_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pleasing Present", cost: [], damage: "", text: "Each player may attach up to 3 Basic Energy cards from their hand to their Pokémon in any way they like. Your opponent does this first." },
      { name: "Flap", cost: [], damage: "40", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Delibird";
  public fullName: string = "Delibird CRI 18";
  public text: string = "Delibird";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
