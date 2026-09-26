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

export class Tirtouga_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Antique Cover Fossil";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ancient Seaweed", cost: [], damage: "30×", text: "This attack does 30 damage for each Item card in your opponent's discard pile." },
      { name: "Surf", cost: [], damage: "80", text: "" }
  ];
  public set: string = "BLK";
  public name: string = "Tirtouga";
  public fullName: string = "Tirtouga BLK 106";
  public text: string = "Tirtouga";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
