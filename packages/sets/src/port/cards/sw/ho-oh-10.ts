import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class HoOh_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Phoenix Turn", powerType: PowerType.ABILITY, text: "Once during your opponent's turn, if Ho-Oh would be Knocked Out by damage from an attack, you may flip a coin. If heads, Ho-Oh isn't discarded. Instead, remove all damage counters, Special Conditions, and other effects from Ho-Oh. Then, discard all cards attached to Ho-Oh (except for Energy cards). This counts as Ho-Oh being Knocked Out and your opponent takes a Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Rainbow Wing", cost: [], damage: "20×", text: "This attack does 20 damage times the number of different types of basic Energy cards attached to Ho-Oh." }
  ];
  public set: string = "SW";
  public name: string = "Ho-Oh";
  public fullName: string = "Ho-Oh SW 10";
  public text: string = "Ho-Oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.discardEnergySelfPower(this, store, state, effect).reduce(effect.power, 99);
    }
    return state;
  }
}
