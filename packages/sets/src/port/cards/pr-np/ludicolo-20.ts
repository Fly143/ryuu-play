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

export class Ludicolo_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rain Dish", powerType: PowerType.ABILITY, text: "At any time between turns, remove 1 damage counter from Ludicolo.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fury Swipes", cost: [], damage: "30×", text: "Flip 3 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "PR-NP";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo PR-NP 20";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 30);
    }
    return state;
  }
}
