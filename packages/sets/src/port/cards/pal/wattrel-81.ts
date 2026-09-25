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

export class Wattrel_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Devastating Wind", cost: [], damage: "", text: "Your opponent shuffles their hand into their deck and draws 4 cards." },
      { name: "Flap", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PAL";
  public name: string = "Wattrel";
  public fullName: string = "Wattrel PAL 81";
  public text: string = "Wattrel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "opponentShuffleDraw:4");
    }
    return state;
  }
}
