import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Pyroar_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litleo";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Intimidating Fang", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 30 less damage (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Searing Flame", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "MEG";
  public name: string = "Pyroar";
  public fullName: string = "Pyroar MEG 24";
  public text: string = "Pyroar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraReduceDamage:30");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraReduceDamage:30");
    }
    return state;
  }
}
