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

export class Ambipom_145 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aipom";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "All-You-Can-Grab", cost: [], damage: "", text: "Flip a coin until you get tails. Search your deck for a number of cards up to the number of heads and put them into your hand. Then, shuffle your deck." },
      { name: "Knock Off", cost: [], damage: "50", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "ASR";
  public name: string = "Ambipom";
  public fullName: string = "Ambipom ASR 145";
  public text: string = "Ambipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
