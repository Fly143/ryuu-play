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

export class Carracosta_38 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tirtouga";
  public hp: number = 160;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Primal Knowledge", powerType: PowerType.ABILITY, text: "Attacks used by your Pokémon do 30 more damage to your opponent's Active Evolution Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tidal Wave", cost: [], damage: "150", text: "" }
  ];
  public set: string = "SCR";
  public name: string = "Carracosta";
  public fullName: string = "Carracosta SCR 38";
  public text: string = "Carracosta";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPlusDamage:30");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPlusDamage:30");
    }
    return state;
  }
}
