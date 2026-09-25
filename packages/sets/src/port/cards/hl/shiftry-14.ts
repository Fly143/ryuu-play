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

export class Shiftry_142 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nuzleaf";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Push Aside", cost: [], damage: "30", text: "Look at your opponent's hand and choose 1 Basic Pokémon or Evolution card you find there. Your opponent puts it at the bottom of his or her deck." },
      { name: "Supernatural Power", cost: [], damage: "40+", text: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage." }
  ];
  public set: string = "HL";
  public name: string = "Shiftry";
  public fullName: string = "Shiftry HL 14";
  public text: string = "Shiftry";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
