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

export class Lotad_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Aqua Lift", powerType: PowerType.ABILITY, text: "If Lotad has any Water Energy attached to it, the Retreat Cost for Lotad is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rolling Tackle", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Lotad";
  public fullName: string = "Lotad CG 55";
  public text: string = "Lotad";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
