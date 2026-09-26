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

export class Mawile_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Turnaround Standby", cost: [], damage: "", text: "During your next turn, any damage done by Mawile's Swallow or Bite to your opponent's Active Pokémon is increased by 40 (before applying Weakness and Resistance)." },
      { name: "Swallow", cost: [], damage: "20", text: "Remove from Mawile the number of damage counters equal to the damage you did to the Defending Pokémon." },
      { name: "Bite", cost: [], damage: "30", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Mawile";
  public fullName: string = "Mawile SV 33";
  public text: string = "Mawile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
