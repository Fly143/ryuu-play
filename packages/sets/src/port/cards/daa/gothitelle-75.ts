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

export class Gothitelle_75 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothorita";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mind Bend", cost: [], damage: "40", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Bend", cost: [], damage: "90", text: "Choose 2 random cards from your opponent's hand. Your opponent reveals those cards and shuffles them into their deck." }
  ];
  public set: string = "DAA";
  public name: string = "Gothitelle";
  public fullName: string = "Gothitelle DAA 75";
  public text: string = "Gothitelle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
