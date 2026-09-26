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

export class Grovyle_312 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Treecko";
  public hp: number = 70;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fury Cutter", cost: [], damage: "10+", text: "Flip 4 coins. If all of them are heads, this attack does 10 damage plus 60 more damage. If not, this attack does 10 damage plus 10 more damage for each heads." }
  ];
  public set: string = "DR";
  public name: string = "Grovyle";
  public fullName: string = "Grovyle DR 31";
  public text: string = "Grovyle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
