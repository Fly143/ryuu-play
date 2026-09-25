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

export class ArvenSToedscruel_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arven's Toedscool";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pull", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot." },
      { name: "Reckless Charge", cost: [], damage: "120", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "DRI";
  public name: string = "Arven's Toedscruel";
  public fullName: string = "Arven's Toedscruel DRI 110";
  public text: string = "Arven's Toedscruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
