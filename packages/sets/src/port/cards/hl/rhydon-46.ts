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

export class Rhydon_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rhyhorn";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Power Diffusion", powerType: PowerType.ABILITY, text: "As long as Rhydon is your Active Pokémon, prevent all damage done by attacks to all of your Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Horn Drill", cost: [], damage: "20", text: "" },
      { name: "Hyper Tail", cost: [], damage: "50+", text: "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "HL";
  public name: string = "Rhydon";
  public fullName: string = "Rhydon HL 46";
  public text: string = "Rhydon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
