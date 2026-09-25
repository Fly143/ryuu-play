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

export class Aurorus_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Amaura";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ice Shield", powerType: PowerType.ABILITY, text: "Any damage done by an opponent's attack to each of your Water Pokémon that has any Water Energy attached to it is reduced by 20 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Icy Wind", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "FFI";
  public name: string = "Aurorus";
  public fullName: string = "Aurorus FFI 26";
  public text: string = "Aurorus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:20");
    }
    return state;
  }
}
