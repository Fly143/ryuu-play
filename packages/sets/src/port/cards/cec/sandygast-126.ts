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

export class Sandygast_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Astonish", cost: [], damage: "10", text: "Choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck." },
      { name: "Hook", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Sandygast";
  public fullName: string = "Sandygast CEC 126";
  public text: string = "Sandygast";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
