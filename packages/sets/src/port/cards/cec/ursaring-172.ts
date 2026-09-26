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

export class Ursaring_172 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Teddiursa";
  public hp: number = 140;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "50", text: "" },
      { name: "Heavy Hold", cost: [], damage: "120", text: "The Defending Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "CEC";
  public name: string = "Ursaring";
  public fullName: string = "Ursaring CEC 172";
  public text: string = "Ursaring";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
