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

export class Whismur_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shout", cost: [], damage: "", text: "Flip a coin. If heads, discard a random card from your opponent's hand." },
      { name: "Hyper Voice", cost: [], damage: "30", text: "" }
  ];
  public set: string = "PLB";
  public name: string = "Whismur";
  public fullName: string = "Whismur PLB 105";
  public text: string = "Whismur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
