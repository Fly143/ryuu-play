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

export class LeafeonVMAX_205 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Leafeon V";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grass Knot", cost: [], damage: "60×", text: "This attack does 60 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." },
      { name: "Max Leaf", cost: [], damage: "170", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "CRE";
  public name: string = "Leafeon VMAX";
  public fullName: string = "Leafeon VMAX CRE 205";
  public text: string = "Leafeon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
