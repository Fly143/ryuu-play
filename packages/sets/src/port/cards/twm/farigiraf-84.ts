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

export class Farigiraf_84 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Girafarig";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "One-derful Rumble", cost: [], damage: "40×", text: "This attack does 40 damage for each of your Stage 1 Pokémon in play." },
      { name: "Eerie Wave", cost: [], damage: "80", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "TWM";
  public name: string = "Farigiraf";
  public fullName: string = "Farigiraf TWM 84";
  public text: string = "Farigiraf";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerOwnBench(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
