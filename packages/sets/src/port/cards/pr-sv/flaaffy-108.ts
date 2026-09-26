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

export class Flaaffy_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mareep";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Headbutt", cost: [], damage: "20", text: "" },
      { name: "Electro Ball", cost: [], damage: "50", text: "" }
  ];
  public set: string = "PR-SV";
  public name: string = "Flaaffy";
  public fullName: string = "Flaaffy PR-SV 108";
  public text: string = "Flaaffy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
