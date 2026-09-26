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

export class Excadrill_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drilbur";
  public hp: number = 120;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rototiller", cost: [], damage: "", text: "Shuffle 4 cards from your discard pile into your deck." },
      { name: "Slash", cost: [], damage: "90", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Excadrill";
  public fullName: string = "Excadrill CEC 119";
  public text: string = "Excadrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
