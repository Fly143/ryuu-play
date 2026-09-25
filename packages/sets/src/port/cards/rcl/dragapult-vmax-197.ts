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

export class DragapultVMAX_197 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dragapult V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shred", cost: [], damage: "60", text: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon." },
      { name: "Max Phantom", cost: [], damage: "130", text: "Put 5 damage counters on your opponent's Benched Pokémon in any way you like." }
  ];
  public set: string = "RCL";
  public name: string = "Dragapult VMAX";
  public fullName: string = "Dragapult VMAX RCL 197";
  public text: string = "Dragapult VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
