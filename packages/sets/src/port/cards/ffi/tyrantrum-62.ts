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

export class Tyrantrum_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tyrunt";
  public hp: number = 150;
    public height?: number = 2.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chew Up", cost: [], damage: "60+", text: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 90 more damage." },
      { name: "Giga Impact", cost: [], damage: "150", text: "This Pokémon can't attack during your next turn." }
  ];
  public set: string = "FFI";
  public name: string = "Tyrantrum";
  public fullName: string = "Tyrantrum FFI 62";
  public text: string = "Tyrantrum";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
