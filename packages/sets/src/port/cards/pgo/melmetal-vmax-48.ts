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

export class MelmetalVMAX_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Melmetal V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "G-Max Juggernaut", cost: [], damage: "160+", text: "This attack does 60 more damage for each extra Metal Energy attached to this Pokémon (in addition to this attack's cost). You can't add more than 120 damage in this way." }
  ];
  public set: string = "PGO";
  public name: string = "Melmetal VMAX";
  public fullName: string = "Melmetal VMAX PGO 48";
  public text: string = "Melmetal VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
