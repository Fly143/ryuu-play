import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Medicham_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meditite";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ω Barrage", powerType: PowerType.ABILITY, text: "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Calm Mind", cost: [], damage: "", text: "Heal 30 damage from this Pokémon." },
      { name: "Yoga Kick", cost: [], damage: "30", text: "This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "ROS";
  public name: string = "Medicham";
  public fullName: string = "Medicham ROS 81";
  public text: string = "Medicham";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
