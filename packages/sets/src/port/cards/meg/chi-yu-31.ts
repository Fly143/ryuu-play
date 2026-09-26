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

export class ChiYu_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Scorching Earth", cost: [], damage: "40", text: "If your opponent has a Stadium in play, discard it. If you do, your opponent can't play any Stadium cards from their hand during their next turn." }
  ];
  public set: string = "MEG";
  public name: string = "Chi-Yu";
  public fullName: string = "Chi-Yu MEG 31";
  public text: string = "Chi-Yu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
