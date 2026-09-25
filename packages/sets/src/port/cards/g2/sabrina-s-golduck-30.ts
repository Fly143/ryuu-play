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

export class SabrinaSGolduck_30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sabrina's Psyduck";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Damage Shift", cost: [], damage: "", text: "Move 1 damage counter from each of your Pokémon that has any on it to the Defending Pokémon. (Don't apply Weakness and Resistance.)" },
      { name: "Water Spray", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage; if tails, this attack does 20 damage." }
  ];
  public set: string = "G2";
  public name: string = "Sabrina's Golduck";
  public fullName: string = "Sabrina's Golduck G2 30";
  public text: string = "Sabrina's Golduck";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "moveDamageCounters");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
