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

export class Lunala_61 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cosmoem";
  public hp: number = 160;
    public height?: number = 3.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shatter Shot", cost: [], damage: "40×", text: "This attack does 40 damage times the amount of Psychic Energy attached to this Pokémon." },
      { name: "Wings of the Moone", cost: [], damage: "130", text: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like." }
  ];
  public set: string = "GRI";
  public name: string = "Lunala";
  public fullName: string = "Lunala GRI 61";
  public text: string = "Lunala";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
