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

export class Crobat_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golbat";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flutter Trick", cost: [], damage: "20", text: "Flip a coin. If heads, look at your opponent's hand and choose 1 card. Your opponent discards the card you chose." },
      { name: "Triple Poison", cost: [], damage: "10", text: "The Defending Pokémon is now Poisoned. Put 3 damage counters instead of 1 on the Defending Pokémon between turns." }
  ];
  public set: string = "HL";
  public name: string = "Crobat";
  public fullName: string = "Crobat HL 3";
  public text: string = "Crobat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
