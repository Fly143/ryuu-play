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

export class Beedrill_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kakuna";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Allergic Shock", cost: [], damage: "", text: "During your next turn, if the Defending Pokémon is damaged by an attack, it is Knocked Out." },
      { name: "Twineedle", cost: [], damage: "50×", text: "Flip 2 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "ROS";
  public name: string = "Beedrill";
  public fullName: string = "Beedrill ROS 3";
  public text: string = "Beedrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 50);
    }
    return state;
  }
}
