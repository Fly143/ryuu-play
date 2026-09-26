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

export class Magmar_42 extends PokemonCard {
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
      { name: "Eruption", cost: [], damage: "20×", text: "Each player discards the top card of his or her deck. This attack does 20 damage times the number of Energy cards discarded in this way." },
      { name: "Combustion", cost: [], damage: "30", text: "" }
  ];
  public set: string = "TM";
  public name: string = "Magmar";
  public fullName: string = "Magmar TM 42";
  public text: string = "Magmar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
