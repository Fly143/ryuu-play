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

export class BarraskewdaSV032 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Arrokuda";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Peck", cost: [], damage: "30", text: "" },
      { name: "Spiral Jet", cost: [], damage: "130", text: "Discard 2 Water Energy cards from your hand. If you don't, this attack does nothing." }
  ];
  public set: string = "SHF";
  public name: string = "Barraskewda";
  public fullName: string = "Barraskewda SHF SV032";
  public text: string = "Barraskewda";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
