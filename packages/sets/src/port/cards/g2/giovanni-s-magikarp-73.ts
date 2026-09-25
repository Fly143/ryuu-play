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

export class GiovanniSMagikarp_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ancestral Memory", cost: [], damage: "40", text: "Flip a coin. If tails, this attack does nothing. Either way, you can't use this attack again as long as Giovanni's Magikarp stays in play (even putting Giovanni's Magikarp on the Bench won't let you use it again)." },
      { name: "Flail Around", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Magikarp";
  public fullName: string = "Giovanni's Magikarp G2 73";
  public text: string = "Giovanni's Magikarp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    return state;
  }
}
