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

export class GiovanniSNidoqueen_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Nidorina";
  public hp: number = 100;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Kick", cost: [], damage: "40", text: "" },
      { name: "Love Lariat", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 50 more damage if you have at least 1 Giovanni's Nidoking on your Bench. If tails, this attack does nothing." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Nidoqueen";
  public fullName: string = "Giovanni's Nidoqueen G2 23";
  public text: string = "Giovanni's Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
