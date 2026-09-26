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

export class HopSCorvisquire_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hop's Rookidee";
  public hp: number = 90;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Speed Dive", cost: [], damage: "30", text: "" },
      { name: "Razor Wing", cost: [], damage: "80", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Hop's Corvisquire";
  public fullName: string = "Hop's Corvisquire JTG 134";
  public text: string = "Hop's Corvisquire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
