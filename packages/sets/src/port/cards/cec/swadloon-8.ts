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

export class Swadloon_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sewaddle";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Swaddling Leaves", powerType: PowerType.ABILITY, text: "This Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bug Bite", cost: [], damage: "10", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Swadloon";
  public fullName: string = "Swadloon CEC 8";
  public text: string = "Swadloon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:30");
    }
    return state;
  }
}
