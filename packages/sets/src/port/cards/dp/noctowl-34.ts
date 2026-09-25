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

export class Noctowl_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Hoothoot";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "See Beyond", cost: [], damage: "", text: "Choose a card from your hand and put it as a Prize card face up. Then, choose 1 of your face-down Prize cards without looking and put it into your hand. This attack does nothing if all of your Prize cards are face up." },
      { name: "Extrasensory", cost: [], damage: "30+", text: "If you have the same number of cards in your hand as your opponent, this attack does 30 damage plus 50 more damage." }
  ];
  public set: string = "DP";
  public name: string = "Noctowl";
  public fullName: string = "Noctowl DP 34";
  public text: string = "Noctowl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
