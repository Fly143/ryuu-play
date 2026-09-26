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

export class Magmortar_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magmar";
  public hp: number = 140;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mega Punch", cost: [], damage: "50", text: "" },
      { name: "Boltsplosion", cost: [], damage: "120+", text: "If Electivire is on your Bench, this attack does 120 more damage." }
  ];
  public set: string = "FST";
  public name: string = "Magmortar";
  public fullName: string = "Magmortar FST 20";
  public text: string = "Magmortar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
