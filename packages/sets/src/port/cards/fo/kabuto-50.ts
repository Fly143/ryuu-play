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

export class Kabuto_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Kabuto Armor", powerType: PowerType.ABILITY, text: "Whenever an attack (even your own) does damage to Kabuto (after applying Weakness and Resistance), that attack does half the damage to Kabuto (rounded down to the nearest 10). (Any other effects of attacks still happen.) This power stops working while Kabuto is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scratch", cost: [], damage: "10", text: "" }
  ];
  public set: string = "FO";
  public name: string = "Kabuto";
  public fullName: string = "Kabuto FO 50";
  public text: string = "Kabuto";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "halfDamageTaken");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "halfDamageTaken");
    }
    return state;
  }
}
