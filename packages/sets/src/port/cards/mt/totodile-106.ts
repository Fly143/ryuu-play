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

export class Totodile_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "10", text: "" },
      { name: "Shining Fang", cost: [], damage: "10+", text: "If the Defending Pokémon already has any damage counters on it, this attack does 10 damage plus 10 more damage." }
  ];
  public set: string = "MT";
  public name: string = "Totodile";
  public fullName: string = "Totodile MT 106";
  public text: string = "Totodile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
