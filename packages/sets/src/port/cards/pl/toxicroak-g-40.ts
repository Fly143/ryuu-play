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

export class ToxicroakG_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Anticipation", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, excluding damage, done to Toxicroak G.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Deep Poison", cost: [], damage: "20+", text: "If the Defending Pokémon is Poisoned, this attack does 20 damage plus 40 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Toxicroak G";
  public fullName: string = "Toxicroak G PL 40";
  public text: string = "Toxicroak G";

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
