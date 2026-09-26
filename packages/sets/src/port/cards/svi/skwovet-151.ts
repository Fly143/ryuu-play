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

export class Skwovet_151 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Nest Stash", powerType: PowerType.ABILITY, text: "Once during your turn, you may shuffle your hand and put it on the bottom of your deck. If you put any cards on the bottom of your deck in this way, draw a card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bite", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Skwovet";
  public fullName: string = "Skwovet SVI 151";
  public text: string = "Skwovet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 1);
    }
    return state;
  }
}
