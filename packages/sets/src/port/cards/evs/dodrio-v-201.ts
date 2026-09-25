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

export class DodrioV_201 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "No Reprieve", cost: [], damage: "20", text: "During your next turn, this Pokémon's attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance)." },
      { name: "Rampage Drill", cost: [], damage: "160", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "EVS";
  public name: string = "Dodrio V";
  public fullName: string = "Dodrio V EVS 201";
  public text: string = "Dodrio V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 80);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
