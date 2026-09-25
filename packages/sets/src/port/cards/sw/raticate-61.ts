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

export class Raticate_612 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gnaw Off", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 60 more damage." },
      { name: "Sneaky Attack", cost: [], damage: "20+", text: "If Raticate has any Darkness Energy attached to it, this attack does 20 damage plus 20 more damage." }
  ];
  public set: string = "SW";
  public name: string = "Raticate";
  public fullName: string = "Raticate SW 61";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
