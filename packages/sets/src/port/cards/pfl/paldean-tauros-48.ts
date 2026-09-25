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

export class PaldeanTauros_48 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Raging Charge", cost: [], damage: "40×", text: "This attack does 40 damage for each of your Pokémon that has \"Tauros\" in its name that has any damage counters on it." },
      { name: "Double-Edge", cost: [], damage: "70", text: "This Pokémon also does 20 damage to itself." }
  ];
  public set: string = "PFL";
  public name: string = "Paldean Tauros";
  public fullName: string = "Paldean Tauros PFL 48";
  public text: string = "Paldean Tauros";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
