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

export class Rotom_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electribonus", cost: [], damage: "", text: "Discard a Lightning Energy card from your hand. If you do, draw 3 cards." },
      { name: "Poltergeist", cost: [], damage: "20×", text: "Your opponent reveals his or her hand. This attack does 20 damage times the number of Trainer cards in your opponent's hand." }
  ];
  public set: string = "PLB";
  public name: string = "Rotom";
  public fullName: string = "Rotom PLB 49";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
