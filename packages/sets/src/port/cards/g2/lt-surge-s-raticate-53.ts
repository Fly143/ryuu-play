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

export class LtSurgeSRaticate_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lt. Surge's Rattata";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Focus Energy", cost: [], damage: "", text: "During your next turn, Lt. Surge's Raticate's Double-edge attack's damage (base damage and damage to itself) is doubled." },
      { name: "Double-edge", cost: [], damage: "40", text: "Lt. Surge's Raticate does 20 damage to itself." }
  ];
  public set: string = "G2";
  public name: string = "Lt. Surge's Raticate";
  public fullName: string = "Lt. Surge's Raticate G2 53";
  public text: string = "Lt. Surge's Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
