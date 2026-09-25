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

export class Pinsir_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roof Fling", cost: [], damage: "", text: "Flip a coin. If heads, put your opponent's Active Pokémon and all cards attached to it into your opponent's hand." },
      { name: "Guillotine", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SUM";
  public name: string = "Pinsir";
  public fullName: string = "Pinsir SUM 6";
  public text: string = "Pinsir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
