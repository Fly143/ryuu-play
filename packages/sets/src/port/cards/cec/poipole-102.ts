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

export class Poipole_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Belt", cost: [], damage: "10", text: "" },
      { name: "Last Scene", cost: [], damage: "50+", text: "If each player has exactly 1 Prize card remaining, this attack does 130 more damage." }
  ];
  public set: string = "CEC";
  public name: string = "Poipole";
  public fullName: string = "Poipole CEC 102";
  public text: string = "Poipole";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 130, 1);
    }
    return state;
  }
}
