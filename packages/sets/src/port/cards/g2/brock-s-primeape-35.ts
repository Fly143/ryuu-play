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

export class BrockSPrimeape_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Brock's Mankey";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Scram", powerType: PowerType.ABILITY, text: "If Brock's Primeape ever has exactly 10 HP left, shuffle it and all cards attached to it into your deck. This power stops working while Brock's Primeape is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Thrash", cost: [], damage: "60", text: "Brock's Primeape does 20 damage to itself. If there is a Stadium card in play, discard it." }
  ];
  public set: string = "G2";
  public name: string = "Brock's Primeape";
  public fullName: string = "Brock's Primeape G2 35";
  public text: string = "Brock's Primeape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
