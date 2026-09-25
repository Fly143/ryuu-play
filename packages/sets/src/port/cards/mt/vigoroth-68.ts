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

export class Vigoroth_68 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slakoth";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wake-up Punch", cost: [], damage: "10", text: "If Vigoroth evolved from Slakoth during this turn and Slakoth was Asleep, this attack's base damage is 60 instead of 10." },
      { name: "Fury Swipes", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "MT";
  public name: string = "Vigoroth";
  public fullName: string = "Vigoroth MT 68";
  public text: string = "Vigoroth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    return state;
  }
}
