import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Aerodactyl_53 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Old Amber Aerodactyl";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Scream", powerType: PowerType.ABILITY, text: "Your Pokémon's attacks do 10 more damage to the Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wing Attack", cost: [], damage: "40", text: "" }
  ];
  public set: string = "DRX";
  public name: string = "Aerodactyl";
  public fullName: string = "Aerodactyl DRX 53";
  public text: string = "Aerodactyl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:10");
    }
    return state;
  }
}
