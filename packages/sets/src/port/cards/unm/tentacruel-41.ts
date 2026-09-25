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

export class Tentacruel_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tentacool";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wicked Tentacles", cost: [], damage: "", text: "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon. If you do, put 3 damage counters on the Pokémon you moved the Energy to." },
      { name: "Wrap", cost: [], damage: "60", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." }
  ];
  public set: string = "UNM";
  public name: string = "Tentacruel";
  public fullName: string = "Tentacruel UNM 41";
  public text: string = "Tentacruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
