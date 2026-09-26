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

export class Kingambit_130 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Bisharp";
  public hp: number = 180;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Strike Down", cost: [], damage: "", text: "If your opponent's Active Pokémon has 4 or more damage counters on it, that Pokémon is Knocked Out." },
      { name: "Massive Rend", cost: [], damage: "140", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Kingambit";
  public fullName: string = "Kingambit PR-SV 130";
  public text: string = "Kingambit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
