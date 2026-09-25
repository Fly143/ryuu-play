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

export class LtSurgeSJolteon_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Eevee";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "High Voltage", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent can't play Trainer cards during his or her next turn." },
      { name: "Thunder Flare", cost: [], damage: "30+", text: "Does 30 damage plus 10 damage times the number of damage counters on Lt. Surge's Jolteon, then flip a coin. If tails, Lt. Surge's Jolteon does 30 damage to itself." }
  ];
  public set: string = "G2";
  public name: string = "Lt. Surge's Jolteon";
  public fullName: string = "Lt. Surge's Jolteon G2 28";
  public text: string = "Lt. Surge's Jolteon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "opponentCantTrainers");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
