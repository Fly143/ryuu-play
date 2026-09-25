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

export class Chansey_692 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Trial", cost: [], damage: "", text: "Flip a coin. If heads, remove 3 damage counters from Chansey. If tails, remove 3 damage counters from the Defending Pokémon." },
      { name: "Pulled Punch", cost: [], damage: "40", text: "If the Defending Pokémon already has any damage counters on it, this attack's base damage is 10 instead of 40." }
  ];
  public set: string = "PL";
  public name: string = "Chansey";
  public fullName: string = "Chansey PL 69";
  public text: string = "Chansey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
