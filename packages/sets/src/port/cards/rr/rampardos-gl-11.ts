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

export class RampardosGL_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trample", cost: [], damage: "", text: "Flip a coin for each Benched Pokémon (both yours and your opponent's). If that coin flip is heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Rend", cost: [], damage: "40+", text: "If the Defending Pokémon has any damage counters on it, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "RR";
  public name: string = "Rampardos GL";
  public fullName: string = "Rampardos GL RR 11";
  public text: string = "Rampardos GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
