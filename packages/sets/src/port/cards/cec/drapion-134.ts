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

export class Drapion_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skorupi";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Cross Poison", cost: [], damage: "50×", text: "Flip 4 coins. This attack does 50 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Poisoned." },
      { name: "Slicing Blade", cost: [], damage: "120", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Drapion";
  public fullName: string = "Drapion CEC 134";
  public text: string = "Drapion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 4, 50);
    }
    return state;
  }
}
