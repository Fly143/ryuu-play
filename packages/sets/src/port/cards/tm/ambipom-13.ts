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

export class Ambipom_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aipom";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Astonish", cost: [], damage: "20", text: "Choose 2 cards from your opponent's hand without looking. Look at the cards you chose, then have your opponent shuffle those cards into his or her deck." },
      { name: "Tail Spank", cost: [], damage: "60", text: "Discard 2 cards from your hand. (If you can't discard 2 cards from your hand, this attack does nothing.)" }
  ];
  public set: string = "TM";
  public name: string = "Ambipom";
  public fullName: string = "Ambipom TM 13";
  public text: string = "Ambipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardFromHand(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
