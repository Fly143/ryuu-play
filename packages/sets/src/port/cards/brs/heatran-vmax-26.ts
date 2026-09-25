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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class HeatranVMAX_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Heatran V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magma Gain", powerType: PowerType.ABILITY, text: "Once during your turn, if you have a Stadium in play, you may heal 50 damage from this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Heat Burst", cost: [], damage: "180", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "BRS";
  public name: string = "Heatran VMAX";
  public fullName: string = "Heatran VMAX BRS 26";
  public text: string = "Heatran VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 50);
    }
    return state;
  }
}
