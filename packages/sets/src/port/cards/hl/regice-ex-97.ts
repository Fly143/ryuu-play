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

export class RegiceEx_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Crystal Body", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks, except damage, done to Regice ex by the Attacking Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Freeze Lock", cost: [], damage: "60", text: "Flip a coin. If heads, your opponent can't attach Energy cards from his or her hand to the Defending Pokémon during his or her next turn." }
  ];
  public set: string = "HL";
  public name: string = "Regice ex";
  public fullName: string = "Regice ex HL 97";
  public text: string = "Regice ex";

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
