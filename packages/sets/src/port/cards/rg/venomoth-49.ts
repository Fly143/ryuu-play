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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Venomoth_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venonat";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Protective Dust", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleep Poison", cost: [], damage: "", text: "The Defending Pokémon is now Asleep and Poisoned." },
      { name: "Razor Wind", cost: [], damage: "60", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "RG";
  public name: string = "Venomoth";
  public fullName: string = "Venomoth RG 49";
  public text: string = "Venomoth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
