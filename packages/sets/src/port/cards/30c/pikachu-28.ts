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

export class Pikachu_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Lonely Gaze", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon do 20 less damage (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pika Ball", cost: [], damage: "20", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu 30C 28";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraReduceDamage:20");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraReduceDamage:20");
    }
    return state;
  }
}
