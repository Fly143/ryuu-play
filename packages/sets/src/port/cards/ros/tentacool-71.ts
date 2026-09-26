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

export class Tentacool_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Recovery", powerType: PowerType.ABILITY, text: "When this Pokémon is healed, double the amount healed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psyshot", cost: [], damage: "20", text: "" }
  ];
  public set: string = "ROS";
  public name: string = "Tentacool";
  public fullName: string = "Tentacool ROS 71";
  public text: string = "Tentacool";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "healDouble");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "healDouble");
    }
    return state;
  }
}
