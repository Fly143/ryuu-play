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

export class Seedot_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bide", cost: [], damage: "", text: "Flip a coin. If heads, during your opponent's next turn, if Seedot would be Knocked Out by damage from an attack, Seedot is not Knocked Out and its remaining HP becomes 10 instead." },
      { name: "Rollout", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DP";
  public name: string = "Seedot";
  public fullName: string = "Seedot DP 97";
  public text: string = "Seedot";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
