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

export class Vileplume_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 140;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Allergy Panic", powerType: PowerType.ABILITY, text: "Apply Weakness for each Pokémon (both yours and your opponent's) as ×4 instead.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Pollen Spray", cost: [], damage: "50", text: "The Defending Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "PLS";
  public name: string = "Vileplume";
  public fullName: string = "Vileplume PLS 3";
  public text: string = "Vileplume";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
