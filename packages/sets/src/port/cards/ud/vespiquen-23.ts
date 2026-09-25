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

export class Vespiquen_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Combee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Defense Sign", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Grass Pokémon by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mach Wind", cost: [], damage: "60", text: "During your next turn, Vespiquen's Retreat Cost is 0." }
  ];
  public set: string = "UD";
  public name: string = "Vespiquen";
  public fullName: string = "Vespiquen UD 23";
  public text: string = "Vespiquen";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
