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

export class Tinkaton_140 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tinkatuff";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knock Off", cost: [], damage: "40", text: "Discard a random card from your opponent's hand." },
      { name: "Wild Press", cost: [], damage: "220", text: "This Pokémon also does 60 damage to itself." }
  ];
  public set: string = "PR-SV";
  public name: string = "Tinkaton";
  public fullName: string = "Tinkaton PR-SV 140";
  public text: string = "Tinkaton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardOpponentHand(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
