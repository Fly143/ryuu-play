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

export class Polteageist_90 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sinistea";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Teatime", cost: [], damage: "", text: "Each player draws 2 cards." },
      { name: "Poltergeist", cost: [], damage: "50×", text: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there." }
  ];
  public set: string = "SSH";
  public name: string = "Polteageist";
  public fullName: string = "Polteageist SSH 90";
  public text: string = "Polteageist";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bothDraw:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
