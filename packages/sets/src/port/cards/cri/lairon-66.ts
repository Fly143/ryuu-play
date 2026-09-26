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

export class Lairon_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aron";
  public hp: number = 100;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Metal Claw", cost: [], damage: "20", text: "" },
      { name: "Hammer In", cost: [], damage: "80", text: "" }
  ];
  public set: string = "CRI";
  public name: string = "Lairon";
  public fullName: string = "Lairon CRI 66";
  public text: string = "Lairon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
