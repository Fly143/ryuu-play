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

export class Murkrow_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Evil Eye", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon. Put a damage counter on that Pokémon." },
      { name: "Blindside", cost: [], damage: "", text: "Choose 1 of your opponent's Pokémon that has a damage counter on it. This attack does 20 damage to that Pokémon. Don't apply Weakness and Resistance." }
  ];
  public set: string = "SK";
  public name: string = "Murkrow";
  public fullName: string = "Murkrow SK 79";
  public text: string = "Murkrow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
