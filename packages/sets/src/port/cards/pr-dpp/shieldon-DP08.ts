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

export class ShieldonDP08 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Armor Fossil";
  public hp: number = 80;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hard Face", cost: [], damage: "20", text: "During your opponent's next turn, any damage done to Shieldon by attacks is reduced by 20 (after applying Weakness and Resistance)." },
      { name: "Shield Attack", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage." }
  ];
  public set: string = "PR-DPP";
  public name: string = "Shieldon";
  public fullName: string = "Shieldon PR-DPP DP08";
  public text: string = "Shieldon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
