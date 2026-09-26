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

export class Seviper_11 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Deadly Poison", cost: [], damage: "10", text: "You may discard a Grass Energy card attached to Seviper. If you do, the Defending Pokémon is now Poisoned." },
      { name: "Extra Poison", cost: [], damage: "20", text: "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "SS";
  public name: string = "Seviper";
  public fullName: string = "Seviper SS 11";
  public text: string = "Seviper";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
