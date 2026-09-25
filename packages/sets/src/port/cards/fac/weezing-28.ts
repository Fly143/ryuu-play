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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Weezing_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Balloon Bomb", cost: [], damage: "", text: "Flip 2 coins. For each heads, discard 2 cards from the top of your opponent's deck." },
      { name: "Thick Liquid", cost: [], damage: "80", text: "Both Active Pokémon are now Confused and Poisoned." }
  ];
  public set: string = "FAC";
  public name: string = "Weezing";
  public fullName: string = "Weezing FAC 28";
  public text: string = "Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
