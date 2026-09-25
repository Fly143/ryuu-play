import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class HoOhLEGEND_111 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sacred Rainbow", powerType: PowerType.ABILITY, text: "All Energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bright Wing", cost: [], damage: "100", text: "Discard an Energy attached to Ho-Oh LEGEND." }
  ];
  public set: string = "HS";
  public name: string = "Ho-Oh LEGEND";
  public fullName: string = "Ho-Oh LEGEND HS 111";
  public text: string = "Ho-Oh LEGEND";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
