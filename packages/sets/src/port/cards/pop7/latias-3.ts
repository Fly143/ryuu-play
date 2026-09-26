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

export class Latias_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Miraculous Light", cost: [], damage: "10", text: "Remove 2 damage counters and all Special Conditions from Latias." },
      { name: "Mist Ball", cost: [], damage: "80", text: "Discard a Fire and a Water Energy attached to Latias." }
  ];
  public set: string = "POP7";
  public name: string = "Latias";
  public fullName: string = "Latias POP7 3";
  public text: string = "Latias";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
