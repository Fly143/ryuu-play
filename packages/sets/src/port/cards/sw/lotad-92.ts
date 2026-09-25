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

export class Lotad_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Sport", cost: [], damage: "10+", text: "If Lotad has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 20 more damage." },
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SW";
  public name: string = "Lotad";
  public fullName: string = "Lotad SW 92";
  public text: string = "Lotad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
