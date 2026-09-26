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

export class Beedrill_18 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kakuna";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Triple Poison", cost: [], damage: "10", text: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. Your opponent now puts 3 damage counters on it instead of 1 after each player's turn (even if it was already Poisoned)." },
      { name: "Pin Missile", cost: [], damage: "20×", text: "Flip 4 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "N2";
  public name: string = "Beedrill";
  public fullName: string = "Beedrill N2 18";
  public text: string = "Beedrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 20);
    }
    return state;
  }
}
