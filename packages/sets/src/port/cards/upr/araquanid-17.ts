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

export class Araquanid_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dewpider";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Water Bubble", powerType: PowerType.ABILITY, text: "Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Aqua Edge", cost: [], damage: "70", text: "" }
  ];
  public set: string = "UPR";
  public name: string = "Araquanid";
  public fullName: string = "Araquanid UPR 17";
  public text: string = "Araquanid";

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
