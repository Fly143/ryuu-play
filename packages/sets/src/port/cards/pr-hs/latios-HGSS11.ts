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

export class LatiosHGSS11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Luster Float", powerType: PowerType.ABILITY, text: "If you have Latias in play, the Retreat Cost for Latios is 0.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Infinite Wing", cost: [], damage: "80", text: "Discard 2 Energy attached to Latios." }
  ];
  public set: string = "PR-HS";
  public name: string = "Latios";
  public fullName: string = "Latios PR-HS HGSS11";
  public text: string = "Latios";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
