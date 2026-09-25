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

export class Grafaiai_146 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shroodle";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spit Poison", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Poisoned." },
      { name: "Colorful Graffiti", cost: [], damage: "40×", text: "You may discard as many Basic Energy cards as you like from your hand. This attack does 40 damage for each type of Basic Energy you discarded in this way." }
  ];
  public set: string = "PAL";
  public name: string = "Grafaiai";
  public fullName: string = "Grafaiai PAL 146";
  public text: string = "Grafaiai";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
