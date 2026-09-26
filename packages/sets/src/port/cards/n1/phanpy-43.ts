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

export class Phanpy_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tackle", cost: [], damage: "10", text: "" },
      { name: "Endure", cost: [], damage: "", text: "Flip a coin. If heads, then if, during your opponent's next turn, Phanpy would be Knocked Out by an attack, Phanpy isn't Knocked Out and its remaining HP become 10 instead." }
  ];
  public set: string = "N1";
  public name: string = "Phanpy";
  public fullName: string = "Phanpy N1 43";
  public text: string = "Phanpy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
