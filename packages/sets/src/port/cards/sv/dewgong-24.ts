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

export class Dewgong_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seel";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Thick Fat", powerType: PowerType.ABILITY, text: "Any damage done to Dewgong by attacks from Fire Pokémon and Water Pokémon is reduced by 30 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Ice Shard", cost: [], damage: "30", text: "If the Defending Pokémon is a Fighting Pokémon, this attack's base damage is 80 instead of 30." },
      { name: "Aurora Beam", cost: [], damage: "70", text: "" }
  ];
  public set: string = "SV";
  public name: string = "Dewgong";
  public fullName: string = "Dewgong SV 24";
  public text: string = "Dewgong";

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
