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

export class Floragato_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sprigatito";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "20", text: "" },
      { name: "Leaf Step", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Floragato";
  public fullName: string = "Floragato SVI 14";
  public text: string = "Floragato";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
