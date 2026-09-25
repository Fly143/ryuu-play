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

export class Psyduck_175 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Overthink", cost: [], damage: "", text: "During your opponent's next turn, whenever they flip a coin, treat it as tails." },
      { name: "Water Gun", cost: [], damage: "10", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Psyduck";
  public fullName: string = "Psyduck MEW 175";
  public text: string = "Psyduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
