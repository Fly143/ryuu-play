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

export class Electivire_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Electabuzz";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plasma", cost: [], damage: "30", text: "Search your discard pile for a Lightning Energy card and attach it to Electivire." },
      { name: "Thunder Shot", cost: [], damage: "", text: "This attack does 50 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "TM";
  public name: string = "Electivire";
  public fullName: string = "Electivire TM 20";
  public text: string = "Electivire";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
