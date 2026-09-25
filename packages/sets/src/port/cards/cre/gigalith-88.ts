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

export class Gigalith_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Boldore";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Guard Press", cost: [], damage: "50", text: "During your opponent's next turn, this Pokémon takes 50 less damage from attacks (after applying Weakness and Resistance)." },
      { name: "Pressure Shot", cost: [], damage: "180", text: "This Pokémon also does 10 damage to itself for each damage counter on it." }
  ];
  public set: string = "CRE";
  public name: string = "Gigalith";
  public fullName: string = "Gigalith CRE 88";
  public text: string = "Gigalith";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 50);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
