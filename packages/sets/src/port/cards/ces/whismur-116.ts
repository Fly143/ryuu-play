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

export class Whismur_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bawl", cost: [], damage: "", text: "You can use this attack only if you go second, and only on your first turn. Your opponent can't play any Trainer cards from their hand during their next turn." },
      { name: "Pound", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CES";
  public name: string = "Whismur";
  public fullName: string = "Whismur CES 116";
  public text: string = "Whismur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
