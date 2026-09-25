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

export class Golisopod_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wimpod";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powerful Cross", cost: [], damage: "20×", text: "This attack does 20 damage for each card in your opponent's hand." },
      { name: "Waterfall", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Golisopod";
  public fullName: string = "Golisopod PAR 49";
  public text: string = "Golisopod";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
