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

export class Hippowdon_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hippopotas";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Vacuum Sand", cost: [], damage: "20", text: "Search your discard pile for a Fighting Energy card and attach it to Hippowdon." },
      { name: "Sand Impact", cost: [], damage: "50+", text: "Flip a coin for each Fighting Energy attached to Hippowdon. This attack does 50 damage plus 20 more damage for each heads." }
  ];
  public set: string = "LA";
  public name: string = "Hippowdon";
  public fullName: string = "Hippowdon LA 21";
  public text: string = "Hippowdon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
