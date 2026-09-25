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
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Slurpuff_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Swirlix";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sweet Veil", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has any Fairy Energy attached to it can't be affected by any Special Conditions. (Remove any Special Conditions affecting those Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Draining Kiss", cost: [], damage: "30", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "XY";
  public name: string = "Slurpuff";
  public fullName: string = "Slurpuff XY 95";
  public text: string = "Slurpuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
