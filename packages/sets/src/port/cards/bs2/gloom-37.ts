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

export class Gloom_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Oddish";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Poisonpowder", cost: [], damage: "", text: "The Defending Pokémon is now Poisoned." },
      { name: "Foul Odor", cost: [], damage: "20", text: "Both the Defending Pokémon and Gloom are now Confused (after doing damage)." }
  ];
  public set: string = "BS2";
  public name: string = "Gloom";
  public fullName: string = "Gloom BS2 37";
  public text: string = "Gloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialBoth(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
