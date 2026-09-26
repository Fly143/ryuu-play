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

export class Golduck_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Psyduck";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "30", text: "" },
      { name: "Energy Loop", cost: [], damage: "80", text: "Put an Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "CEC";
  public name: string = "Golduck";
  public fullName: string = "Golduck CEC 41";
  public text: string = "Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
