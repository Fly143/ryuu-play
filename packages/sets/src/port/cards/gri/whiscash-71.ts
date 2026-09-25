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

export class Whiscash_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Barboach";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Pulse", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Landslip", cost: [], damage: "100×", text: "Discard the top 3 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way." }
  ];
  public set: string = "GRI";
  public name: string = "Whiscash";
  public fullName: string = "Whiscash GRI 71";
  public text: string = "Whiscash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 3);
    }
    return state;
  }
}
