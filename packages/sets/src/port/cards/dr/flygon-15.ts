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

export class Flygon_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vibrava";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sand Guard", powerType: PowerType.ABILITY, text: "Whenever Flygon would be damaged by your opponent's attack (after applying Weakness and Resistance), flip a coin. If heads, reduce that damage by 20.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Air Slash", cost: [], damage: "60", text: "Flip a coin. If tails, discard an Energy card attached to Flygon." }
  ];
  public set: string = "DR";
  public name: string = "Flygon";
  public fullName: string = "Flygon DR 15";
  public text: string = "Flygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
