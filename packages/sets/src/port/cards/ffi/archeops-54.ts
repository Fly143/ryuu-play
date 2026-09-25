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

export class Archeops_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Archen";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Acrobatics", cost: [], damage: "20+", text: "Flip 2 coins. This attack does 20 more damage for each heads." },
      { name: "Swift Dive", cost: [], damage: "100", text: "If this Pokémon's remaining HP is 50 or less, this attack's base damage is 50." }
  ];
  public set: string = "FFI";
  public name: string = "Archeops";
  public fullName: string = "Archeops FFI 54";
  public text: string = "Archeops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 20, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "baseDamageIfLowHP:50:50");
    }
    return state;
  }
}
