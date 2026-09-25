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

export class Kricketune_24 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kricketot";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Entrancing Melody", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Confused." },
      { name: "Fury Cutter", cost: [], damage: "20+", text: "Flip 3 coins. If 1 of them is heads, this attack does 20 damage plus 20 more damage. If 2 of them are heads, this attack does 20 damage plus 40 more damage. If all of them are heads, this attack does 20 damage plus 100 more damage." }
  ];
  public set: string = "TM";
  public name: string = "Kricketune";
  public fullName: string = "Kricketune TM 24";
  public text: string = "Kricketune";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
