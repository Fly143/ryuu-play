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

export class Scyther_463 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fury Cutter", cost: [], damage: "10+", text: "Flip 4 coins. This attack does 10 damage plus 10 more damage if exactly 1 is heads, or 20 more damage if exactly 2 are heads, or 40 more damage if exactly 3 are heads, or 80 more damage if all 4 are heads." }
  ];
  public set: string = "N2";
  public name: string = "Scyther";
  public fullName: string = "Scyther N2 46";
  public text: string = "Scyther";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
