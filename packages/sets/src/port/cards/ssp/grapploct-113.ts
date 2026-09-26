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

export class Grapploct_113 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clobbopus";
  public hp: number = 140;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chop", cost: [], damage: "40", text: "" },
      { name: "Raging Tentacles", cost: [], damage: "130", text: "If this Pokémon has any damage counters on it, this attack can be used for Fighting." }
  ];
  public set: string = "SSP";
  public name: string = "Grapploct";
  public fullName: string = "Grapploct SSP 113";
  public text: string = "Grapploct";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
