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

export class Hitmonchan_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dodge", cost: [], damage: "", text: "If Hitmonchan would be damaged by an attack during your opponent's next turn, flip a coin. If heads, prevent that attack's damage done to Hitmonchan. (Any other effects of attacks still happen.)" },
      { name: "Supersonic Jab", cost: [], damage: "40", text: "" }
  ];
  public set: string = "N4";
  public name: string = "Hitmonchan";
  public fullName: string = "Hitmonchan N4 69";
  public text: string = "Hitmonchan";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
