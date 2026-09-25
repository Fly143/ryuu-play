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

export class Kakuna_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Weedle";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Grass Cushion", powerType: PowerType.ABILITY, text: "If this Pokémon has any Grass Energy attached to it, it takes 30 less damage from attacks (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bug Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UNB";
  public name: string = "Kakuna";
  public fullName: string = "Kakuna UNB 4";
  public text: string = "Kakuna";

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
