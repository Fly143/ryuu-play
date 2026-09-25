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

export class Corsola_372 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Recover", cost: [], damage: "", text: "Discard a Water Energy attached to Corsola and remove all damage counters from Corsola." },
      { name: "Hyper Cannon", cost: [], damage: "20+", text: "Flip 2 coins. If both of them are heads, this attack does 20 damage plus 50 more damage." }
  ];
  public set: string = "HS";
  public name: string = "Corsola";
  public fullName: string = "Corsola HS 37";
  public text: string = "Corsola";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 999);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
