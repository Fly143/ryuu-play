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

export class KogaSWeezing_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koga's Koffing";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spontaneous Explosion", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage and Koga's Weezing does 30 damage to itself; if tails, this attack does 10 damage." },
      { name: "Toxic Cloud", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It now takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned)." }
  ];
  public set: string = "G2";
  public name: string = "Koga's Weezing";
  public fullName: string = "Koga's Weezing G2 50";
  public text: string = "Koga's Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
