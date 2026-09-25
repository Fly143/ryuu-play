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

export class Igglybuff_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hover Lift", powerType: PowerType.ABILITY, text: "You pay Colorless less to retreat your Jigglypuff, Wigglytuff, Wigglytuff ex, and Igglybuff.", useWhenInPlay: true },
      { name: "Baby Evolution", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may put Jigglypuff from your hand onto Igglybuff (this counts as evolving Igglybuff) and remove all damage counters from Igglybuff.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [];
  public set: string = "CG";
  public name: string = "Igglybuff";
  public fullName: string = "Igglybuff CG 21";
  public text: string = "Igglybuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
