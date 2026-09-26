import {
  Effect,
  State,
  StoreLike,
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

export class Dewgong_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seel";
  public hp: number = 130;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wash Out", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may use this Ability. Move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "POR";
  public name: string = "Dewgong";
  public fullName: string = "Dewgong POR 19";
  public text: string = "Dewgong";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect as any);
    }
    return state;
  }
}
