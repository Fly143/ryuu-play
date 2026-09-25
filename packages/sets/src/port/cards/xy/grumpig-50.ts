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

export class Grumpig_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spoink";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tricky Steps", cost: [], damage: "30", text: "You may move an Energy attached to your opponent's Active Pokémon to 1 of your opponent's Benched Pokémon." },
      { name: "Psybeam", cost: [], damage: "60", text: "Your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "XY";
  public name: string = "Grumpig";
  public fullName: string = "Grumpig XY 50";
  public text: string = "Grumpig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
