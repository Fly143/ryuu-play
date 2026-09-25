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

export class Staraptor_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Staravia";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Accelerative Dive", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing. If heads, prevent all damage done to Staraptor by attacks (both yours and your opponent's) until the end of your next turn." },
      { name: "Brave Heart", cost: [], damage: "100", text: "Flip a coin. If tails, Staraptor does 100 damage to itself." }
  ];
  public set: string = "DP";
  public name: string = "Staraptor";
  public fullName: string = "Staraptor DP 16";
  public text: string = "Staraptor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
