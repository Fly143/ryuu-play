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

export class WalkingWake_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aurora Gain", cost: [], damage: "20", text: "Heal 20 damage from this Pokémon." },
      { name: "Undulating Slice", cost: [], damage: "20×", text: "Put up to 9 damage counters on this Pokémon. This attack does 20 damage for each damage counter you placed in this way." }
  ];
  public set: string = "TWM";
  public name: string = "Walking Wake";
  public fullName: string = "Walking Wake TWM 63";
  public text: string = "Walking Wake";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
