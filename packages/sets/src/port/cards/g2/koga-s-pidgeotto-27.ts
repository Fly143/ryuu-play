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

export class KogaSPidgeotto_27 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koga's Pidgey";
  public hp: number = 60;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Quick Turn", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." },
      { name: "Aerial Maneuvers", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage, and, during your opponent's next turn, prevent all effects of attacks, including damage, done to Koga's Pidgeotto. If tails, this attack does 10 damage." }
  ];
  public set: string = "G2";
  public name: string = "Koga's Pidgeotto";
  public fullName: string = "Koga's Pidgeotto G2 27";
  public text: string = "Koga's Pidgeotto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
