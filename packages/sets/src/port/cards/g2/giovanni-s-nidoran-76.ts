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

export class GiovanniSNidoran_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Kick", cost: [], damage: "10×", text: "Flip 2 coins. This attack does 10 damage times the number of heads." },
      { name: "Retaliation", cost: [], damage: "30", text: "You can't use this attack unless Giovanni's Nidoran ♂ has 2 or more damage counters on it." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Nidoran ♂";
  public fullName: string = "Giovanni's Nidoran ♂ G2 76";
  public text: string = "Giovanni's Nidoran ♂";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
