import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class ShinxSH12 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Star Barrier", powerType: PowerType.ABILITY, text: "As long as Shinx has any Energy attached to it, Shinx has no Weakness.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Payback", cost: [], damage: "10+", text: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 30 more damage." }
  ];
  public set: string = "AR";
  public name: string = "Shinx";
  public fullName: string = "Shinx AR SH12";
  public text: string = "Shinx";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
