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

export class Mudkip_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Submerge", powerType: PowerType.ABILITY, text: "As long as Mudkip is on your Bench, prevent all damage done to Mudkip by attacks (both yours and your opponent's).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mud Slap", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Mudkip";
  public fullName: string = "Mudkip CG 57";
  public text: string = "Mudkip";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
