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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class SabrinaSSlowbro_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Slowpoke";
  public hp: number = 70;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Naptime", cost: [], damage: "", text: "Flip a coin. If heads, remove 3 damage counters from Sabrina's Slowbro and Sabrina's Slowbro is now Asleep. If Sabrina's Slowbro has fewer damage counters than that, remove all of them." },
      { name: "Screaming Headbutt", cost: [], damage: "40", text: "You can't use this attack during your next turn." }
  ];
  public set: string = "G1";
  public name: string = "Sabrina's Slowbro";
  public fullName: string = "Sabrina's Slowbro G1 60";
  public text: string = "Sabrina's Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
