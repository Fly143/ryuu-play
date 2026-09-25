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

export class Flareon_262 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Incandescent Awakening", powerType: PowerType.ABILITY, text: "If this Pokémon has a Memory Capsule attached, Grass Pokémon in play (both yours and your opponent's) have no Abilities.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Mane", cost: [], damage: "100", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Flareon";
  public fullName: string = "Flareon VIV 26";
  public text: string = "Flareon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
