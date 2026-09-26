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

export class Scyther_36 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Afterimage Strike", cost: [], damage: "20", text: "During your opponent's next turn, if Scyther would be damaged by an attack, flip a coin. If heads, prevent that attack's damage done to Scyther." }
  ];
  public set: string = "UD";
  public name: string = "Scyther";
  public fullName: string = "Scyther UD 36";
  public text: string = "Scyther";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
