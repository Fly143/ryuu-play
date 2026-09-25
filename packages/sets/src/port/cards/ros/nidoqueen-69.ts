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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Nidoqueen_69 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nidorina";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ω Barrage", powerType: PowerType.ABILITY, text: "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Poison Jab", cost: [], damage: "30", text: "Your opponent's Active Pokémon is now Poisoned." },
      { name: "Dynamite Punch", cost: [], damage: "70", text: "This Pokémon does 20 damage to itself. Don't apply Weakness to this damage." }
  ];
  public set: string = "ROS";
  public name: string = "Nidoqueen";
  public fullName: string = "Nidoqueen ROS 69";
  public text: string = "Nidoqueen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
