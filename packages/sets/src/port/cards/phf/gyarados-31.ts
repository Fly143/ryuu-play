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

export class Gyarados_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Howling Rampage", cost: [], damage: "20+", text: "Does 20 damage times the number of Prize cards both players have taken." },
      { name: "Hydro Splash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PHF";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados PHF 31";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesPrize:20:both");
    }
    return state;
  }
}
