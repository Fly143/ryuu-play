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

export class RadiantHawlucha_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Big Match", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, your Pokémon's attacks do 30 more damage to your opponent's Active Pokémon VMAX (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Kick", cost: [], damage: "50", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Radiant Hawlucha";
  public fullName: string = "Radiant Hawlucha BRS 81";
  public text: string = "Radiant Hawlucha";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:30");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "plusPowerMarker:30");
    }
    return state;
  }
}
