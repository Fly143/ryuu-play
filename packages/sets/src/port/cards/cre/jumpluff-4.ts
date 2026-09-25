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

export class Jumpluff_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skiploom";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fluffy Barrage", powerType: PowerType.ABILITY, text: "This Pokémon may attack twice each turn. If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spinning Attack", cost: [], damage: "60", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Jumpluff";
  public fullName: string = "Jumpluff CRE 4";
  public text: string = "Jumpluff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attackTwice");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "attackTwice");
    }
    return state;
  }
}
