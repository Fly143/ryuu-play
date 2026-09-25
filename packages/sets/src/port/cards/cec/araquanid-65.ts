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

export class Araquanid_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dewpider";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Headstrike", cost: [], damage: "40", text: "" },
      { name: "Liquidation", cost: [], damage: "80", text: "During your next turn, the Defending Pokémon takes 60 more damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "CEC";
  public name: string = "Araquanid";
  public fullName: string = "Araquanid CEC 65";
  public text: string = "Araquanid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
