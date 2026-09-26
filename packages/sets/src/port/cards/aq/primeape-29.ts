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

export class Primeape_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mankey";
  public hp: number = 80;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Karate Chop", cost: [], damage: "40-", text: "Damage from this attack is reduced by 10 for each damage counter on Primeape." },
      { name: "Sudden Charge", cost: [], damage: "40", text: "Primeape does 10 damage to itself. Then, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any." }
  ];
  public set: string = "AQ";
  public name: string = "Primeape";
  public fullName: string = "Primeape AQ 29";
  public text: string = "Primeape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "reduceDamageMarker:10");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
