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

export class Rayquaza_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Guard", powerType: PowerType.ABILITY, text: "As long as Rayquaza has any Holon Energy cards attached to it, ignore the effect of Rayquaza's Lightning Storm attack.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Blow", cost: [], damage: "10×", text: "Does 10 damage times the amount of Energy attached to Rayquaza." },
      { name: "Lightning Storm", cost: [], damage: "70", text: "Put 7 damage counters on Rayquaza." }
  ];
  public set: string = "DS";
  public name: string = "Rayquaza δ";
  public fullName: string = "Rayquaza δ DS 13";
  public text: string = "Rayquaza δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 70);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
