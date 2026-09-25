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

export class Mamoswine_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Piloswine";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ramming Strike", cost: [], damage: "30×", text: "Flip a coin until you get tails. This attack does 30 damage times the number of heads or you may start again. Each time you start again, put 2 damage counters on Mamoswine. (If Mamoswine would be Knocked Out, you can't start again.)" },
      { name: "Parade", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each Swinub on your Bench, plus 20 more damage for each Piloswine on your Bench, and 40 more damage for each Mamoswine on your Bench." }
  ];
  public set: string = "PL";
  public name: string = "Mamoswine";
  public fullName: string = "Mamoswine PL 21";
  public text: string = "Mamoswine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
