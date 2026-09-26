import {
  Effect,
  State,
  StoreLike,
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

export class MrMime_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energy Barrier", powerType: PowerType.ABILITY, text: "If Mr. Mime would be damaged by an attack, reduce that damage by 10 for each basic Energy card attached to Mr. Mime. The maximum amount of damage that can be reduced by Energy Barrier is 20.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mind Shock", cost: [], damage: "20", text: "Don't apply Weakness and Resistance." }
  ];
  public set: string = "AQ";
  public name: string = "Mr. Mime";
  public fullName: string = "Mr. Mime AQ 95";
  public text: string = "Mr. Mime";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
