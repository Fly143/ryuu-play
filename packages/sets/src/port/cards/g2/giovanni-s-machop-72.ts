import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class GiovanniSMachop_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chop", cost: [], damage: "10", text: "" },
      { name: "Fury Punch", cost: [], damage: "20×", text: "Flip a coin. If heads, this attack does 20 damage times the number of damage counters on Giovanni's Machop." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Machop";
  public fullName: string = "Giovanni's Machop G2 72";
  public text: string = "Giovanni's Machop";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
