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

export class Regigigas_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Slow Start", powerType: PowerType.ABILITY, text: "Regigigas can't attack until your opponent has 3 or less Prize cards left.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crush Grip", cost: [], damage: "120", text: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 40 instead of 120." }
  ];
  public set: string = "SF";
  public name: string = "Regigigas";
  public fullName: string = "Regigigas SF 15";
  public text: string = "Regigigas";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attackGate");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "attackGate");
    }
    return state;
  }
}
