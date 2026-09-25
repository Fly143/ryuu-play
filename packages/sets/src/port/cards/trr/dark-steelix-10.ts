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

export class DarkSteelix_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Link", cost: [], damage: "20", text: "Search your discard pile for an Energy card and attach it to Dark Steelix." },
      { name: "Heavy Impact", cost: [], damage: "60", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Dark Steelix";
  public fullName: string = "Dark Steelix TRR 10";
  public text: string = "Dark Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
