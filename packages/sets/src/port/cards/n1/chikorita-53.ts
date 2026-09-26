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

export class Chikorita_532 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "10", text: "" },
      { name: "Deflector", cost: [], damage: "", text: "During your opponent's next turn, whenever Chikorita takes damage, divide that damage in half (rounded down to the nearest 10). (Any other effects still happen.)" }
  ];
  public set: string = "N1";
  public name: string = "Chikorita";
  public fullName: string = "Chikorita N1 53";
  public text: string = "Chikorita";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
