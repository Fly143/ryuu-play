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

export class Kricketune_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kricketot";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Revenge Melody", cost: [], damage: "20×", text: "Does 20 damage times the number of Kricketot and Kricketune in your discard pile." },
      { name: "Bug Buzz", cost: [], damage: "50+", text: "If the Defending Pokémon is Asleep, this attack does 50 damage plus 30 more damage. Remove the Special Condition Asleep from the Defending Pokémon." }
  ];
  public set: string = "PL";
  public name: string = "Kricketune";
  public fullName: string = "Kricketune PL 32";
  public text: string = "Kricketune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "damageTimesDiscardPokemon:20");
    }
    return state;
  }
}
