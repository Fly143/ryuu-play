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

export class Beedrill_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kakuna";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sudden Sting", cost: [], damage: "10", text: "If this Pokémon evolved from Kakuna during this turn, your opponent's Active Pokémon is now Paralyzed and Poisoned." },
      { name: "Sharp Sting", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Beedrill";
  public fullName: string = "Beedrill CRI 3";
  public text: string = "Beedrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
