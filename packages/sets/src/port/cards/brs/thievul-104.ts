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

export class Thievul_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nickit";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Baffling", powerType: PowerType.ABILITY, text: "If your opponent has 2 or fewer Prize cards remaining, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Benched Pokémon V.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sharp Fang", cost: [], damage: "110", text: "" }
  ];
  public set: string = "BRS";
  public name: string = "Thievul";
  public fullName: string = "Thievul BRS 104";
  public text: string = "Thievul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraProtectBench");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraProtectBench");
    }
    return state;
  }
}
