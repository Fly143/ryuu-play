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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class BronzongE4_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Hand Refresh", cost: [], damage: "", text: "Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)" },
      { name: "Payback", cost: [], damage: "10+", text: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 50 more damage and the Defending Pokémon is now Confused." }
  ];
  public set: string = "RR";
  public name: string = "Bronzong E4";
  public fullName: string = "Bronzong E4 RR 16";
  public text: string = "Bronzong E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
