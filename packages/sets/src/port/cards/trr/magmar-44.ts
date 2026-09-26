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

export class Magmar_442 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dump and Draw", cost: [], damage: "", text: "Discard up to 2 Energy cards from your hand. Then, draw 2 cards for each Energy card you discarded." },
      { name: "Flame Tail", cost: [], damage: "40", text: "" }
  ];
  public set: string = "TRR";
  public name: string = "Magmar";
  public fullName: string = "Magmar TRR 44";
  public text: string = "Magmar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
