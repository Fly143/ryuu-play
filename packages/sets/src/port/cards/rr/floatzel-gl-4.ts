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

export class FloatzelGL_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Incite", cost: [], damage: "", text: "Search your discard pile for up to 2 Supporter cards, show them to your opponent, and put them into your hand." },
      { name: "Giant Wave", cost: [], damage: "50", text: "Floatzel GL can't use Giant Wave during your next turn." }
  ];
  public set: string = "RR";
  public name: string = "Floatzel GL";
  public fullName: string = "Floatzel GL RR 4";
  public text: string = "Floatzel GL";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
