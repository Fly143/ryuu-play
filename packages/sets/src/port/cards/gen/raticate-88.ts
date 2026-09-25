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

export class Raticate_882 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Antibodies", powerType: PowerType.ABILITY, text: "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dirty Shock", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned. Discard all Pokémon Tool cards attached to that Pokémon." }
  ];
  public set: string = "GEN";
  public name: string = "Raticate";
  public fullName: string = "Raticate GEN 88";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
