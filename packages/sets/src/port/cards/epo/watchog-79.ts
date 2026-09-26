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

export class Watchog_792 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Patrat";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Watcheck", cost: [], damage: "", text: "Look at the top 5 cards of your opponent's deck and put them back on top of his or her deck in any order." },
      { name: "Quick Tail Smash", cost: [], damage: "20+", text: "Before doing damage, you may flip a coin. If heads, this attack does 60 more damage. If tails, this attack does nothing." }
  ];
  public set: string = "EPO";
  public name: string = "Watchog";
  public fullName: string = "Watchog EPO 79";
  public text: string = "Watchog";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 60, 1);
    }
    return state;
  }
}
