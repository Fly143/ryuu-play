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

export class RaikouSuicuneLEGEND_92 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thunderbolt Spear", cost: [], damage: "150", text: "Raikou & Suicune LEGEND does 50 damage to itself and don't apply Weakness to this damage." },
      { name: "Aurora Gain", cost: [], damage: "50", text: "Remove 5 damage counters from Raikou & Suicune LEGEND." }
  ];
  public set: string = "UL";
  public name: string = "Raikou & Suicune LEGEND";
  public fullName: string = "Raikou & Suicune LEGEND UL 92";
  public text: string = "Raikou & Suicune LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
