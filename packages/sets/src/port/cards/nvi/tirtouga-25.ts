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

export class Tirtouga_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cover Fossil";
  public hp: number = 90;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Gun", cost: [], damage: "30", text: "" },
      { name: "Surf", cost: [], damage: "60", text: "" }
  ];
  public set: string = "NVI";
  public name: string = "Tirtouga";
  public fullName: string = "Tirtouga NVI 25";
  public text: string = "Tirtouga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
