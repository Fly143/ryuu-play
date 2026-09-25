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

export class Toucannon_166 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trumbeak";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Heat Beak", cost: [], damage: "40", text: "Your opponent's Active Pokémon is now Burned." },
      { name: "Giganticannon", cost: [], damage: "160", text: "If this Pokémon evolved during this turn, this attack does nothing." }
  ];
  public set: string = "DRM";
  public name: string = "Toucannon";
  public fullName: string = "Toucannon DRM 166";
  public text: string = "Toucannon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* structural */ state;
    }
    return state;
  }
}
