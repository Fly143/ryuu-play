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

export class ErikaSOddish_78 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Blot", cost: [], damage: "10", text: "If there are any damage counters on Erika's Oddish, remove 1 of them." },
      { name: "Sporadic Sponging", cost: [], damage: "20", text: "If Erika's Oddish has any damage counters on it, flip a coin. If heads, remove 1 of those damage counters." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Oddish";
  public fullName: string = "Erika's Oddish G1 78";
  public text: string = "Erika's Oddish";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
