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

export class Aegislash_135 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doublade";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Big Shield", powerType: PowerType.ABILITY, text: "All of your Pokémon take 30 less damage from your opponent's attacks (after applying Weakness and Resistance). You can't apply more than 1 Big Shield Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Edge", cost: [], damage: "130", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Aegislash";
  public fullName: string = "Aegislash RCL 135";
  public text: string = "Aegislash";

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
