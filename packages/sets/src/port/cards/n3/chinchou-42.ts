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

export class Chinchou_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Positive Ion", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage. If tails, this attack does 10 damage." },
      { name: "Negative Ion", cost: [], damage: "10", text: "If the Defending Pokémon attacks Chinchou during your opponent's next turn, any damage done to Chinchou is reduced by 10 (before applying Weakness and Resistance). (Benching or evolving either Pokémon ends this effect.)" }
  ];
  public set: string = "N3";
  public name: string = "Chinchou";
  public fullName: string = "Chinchou N3 42";
  public text: string = "Chinchou";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* reduceDamageMarker:10 */ state;
    }
    return state;
  }
}
