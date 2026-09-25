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

export class Breloom_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shroomish";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drain Punch", cost: [], damage: "40", text: "Remove from Breloom a number of damage counters equal to the amount of Energy attached to the Defending Pokémon." },
      { name: "Homing Uppercut", cost: [], damage: "60+", text: "If the Defending Pokémon's Retreat Cost is 0, this attack does 60 damage plus 60 more damage." }
  ];
  public set: string = "SW";
  public name: string = "Breloom";
  public fullName: string = "Breloom SW 45";
  public text: string = "Breloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
