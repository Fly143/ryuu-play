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

export class Vigoroth_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slakoth";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reckless Charge", cost: [], damage: "30", text: "Flip a coin. If tails, Vigoroth does 10 damage to itself." },
      { name: "Fight Back", cost: [], damage: "50+", text: "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "PL";
  public name: string = "Vigoroth";
  public fullName: string = "Vigoroth PL 64";
  public text: string = "Vigoroth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
