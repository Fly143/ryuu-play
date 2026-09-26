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

export class Thwackey_17 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grookey";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knock Off", cost: [], damage: "30", text: "Discard a random card from your opponent's hand." }
  ];
  public set: string = "BST";
  public name: string = "Thwackey";
  public fullName: string = "Thwackey BST 17";
  public text: string = "Thwackey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
