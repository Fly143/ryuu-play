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

export class Stoutland_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Herdier";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chomp Chomp Panic", cost: [], damage: "50×", text: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." },
      { name: "Sharp Fang", cost: [], damage: "140", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Stoutland";
  public fullName: string = "Stoutland OBF 172";
  public text: string = "Stoutland";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
