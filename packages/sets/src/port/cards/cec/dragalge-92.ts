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

export class Dragalge_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skrelp";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poison Cultivation", cost: [], damage: "", text: "If your opponent's Active Pokémon is Poisoned, put 10 damage counters instead of 1 on that Pokémon between turns." },
      { name: "Sharp Fin", cost: [], damage: "40", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Dragalge";
  public fullName: string = "Dragalge CEC 92";
  public text: string = "Dragalge";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
