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

export class Klefki_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mischievous Lock", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, Basic Pokémon in play (both yours and your opponent's) have no Abilities, except for Mischievous Lock.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Joust", cost: [], damage: "10", text: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon." }
  ];
  public set: string = "SVI";
  public name: string = "Klefki";
  public fullName: string = "Klefki SVI 96";
  public text: string = "Klefki";

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
