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

export class TapuLele_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psywave", cost: [], damage: "20×", text: "This attack does 20 damage times the amount of Energy attached to your opponent's Active Pokémon." },
      { name: "Magical Swap", cost: [], damage: "", text: "Move any number of damage counters on your opponent's Pokémon to their other Pokémon in any way you like." }
  ];
  public set: string = "UPR";
  public name: string = "Tapu Lele";
  public fullName: string = "Tapu Lele UPR 94";
  public text: string = "Tapu Lele";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesEnergySelf(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
