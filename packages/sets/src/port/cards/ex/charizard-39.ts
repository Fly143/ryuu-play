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

export class Charizard_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Smash", cost: [], damage: "40", text: "Flip a coin. If tails, this attack does nothing." },
      { name: "Flamethrower", cost: [], damage: "60", text: "Discard 1 Fire Energy card attached to Charizard." }
  ];
  public set: string = "EX";
  public name: string = "Charizard";
  public fullName: string = "Charizard EX 39";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    return state;
  }
}
