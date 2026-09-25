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

export class Marowak_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heavy Bone", cost: [], damage: "40", text: "Flip a coin. If tails, Marowak can't use Heavy Bone during your next turn." },
      { name: "Bone Rush", cost: [], damage: "50×", text: "Flip a coin until you get tails. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "SF";
  public name: string = "Marowak";
  public fullName: string = "Marowak SF 63";
  public text: string = "Marowak";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
