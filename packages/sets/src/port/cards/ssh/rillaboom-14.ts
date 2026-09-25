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

export class Rillaboom_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Thwackey";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Voltage Beat", powerType: PowerType.ABILITY, text: "Once during your turn, you may search your deck for up to 2 Grass Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hammer In", cost: [], damage: "140", text: "" }
  ];
  public set: string = "SSH";
  public name: string = "Rillaboom";
  public fullName: string = "Rillaboom SSH 14";
  public text: string = "Rillaboom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "searchEnergyToSelf");
    }
    return state;
  }
}
