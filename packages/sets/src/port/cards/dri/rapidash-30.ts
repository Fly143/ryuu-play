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

export class Rapidash_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ponyta";
  public hp: number = 110;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hurried Gait", powerType: PowerType.ABILITY, text: "Once during your turn, you may draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fire Mane", cost: [], damage: "60", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Rapidash";
  public fullName: string = "Rapidash DRI 30";
  public text: string = "Rapidash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
