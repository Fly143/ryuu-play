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

export class Poliwrath_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poliwhirl";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Split Spiral Punch", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Splash Loop", cost: [], damage: "160", text: "Put 2 Energy attached to this Pokémon into your hand." }
  ];
  public set: string = "ASR";
  public name: string = "Poliwrath";
  public fullName: string = "Poliwrath ASR 85";
  public text: string = "Poliwrath";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
