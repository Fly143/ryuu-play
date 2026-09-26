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

export class MimeJr_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sweet Sleeping Face", powerType: PowerType.ABILITY, text: "As long as Mime Jr. is Asleep, prevent all damage done to Mime Jr. by attacks.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Sleepy Lost", cost: [], damage: "", text: "Put the top card of your opponent's deck in the Lost Zone. Mime Jr. is now Asleep." }
  ];
  public set: string = "CL";
  public name: string = "Mime Jr.";
  public fullName: string = "Mime Jr. CL 47";
  public text: string = "Mime Jr.";

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
