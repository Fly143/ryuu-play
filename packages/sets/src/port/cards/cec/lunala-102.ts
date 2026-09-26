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

export class Lunala_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cosmoem";
  public hp: number = 160;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Blessing of the Moone", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if you have Solgaleo in play, you may search your deck for up to 2 Energy cards and attach them to your Solgaleo or Lunala in any way you like. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lunar Blast", cost: [], damage: "130", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Lunala";
  public fullName: string = "Lunala CEC 102";
  public text: string = "Lunala";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf:2");
    }
    return state;
  }
}
