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

export class Swellow_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Taillow";
  public hp: number = 80;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Big Wing", powerType: PowerType.ABILITY, text: "If Swellow has no Energy attached to it, Swellow's Retreat Cost is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Descent", cost: [], damage: "30", text: "If Swellow was on your Bench this turn, this attack's base damage is 60 instead of 30." }
  ];
  public set: string = "SF";
  public name: string = "Swellow";
  public fullName: string = "Swellow SF 73";
  public text: string = "Swellow";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
