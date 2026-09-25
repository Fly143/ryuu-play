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

export class Tangrowth_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tangela";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Absorb", cost: [], damage: "30", text: "Heal 30 damage from this Pokémon." },
      { name: "Pumped-Up Whip", cost: [], damage: "120+", text: "If this Pokémon has at least 2 extra Energy attached (in addition to this attack's cost), this attack does 140 more damage." }
  ];
  public set: string = "MEG";
  public name: string = "Tangrowth";
  public fullName: string = "Tangrowth MEG 7";
  public text: string = "Tangrowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 140, 1);
    }
    return state;
  }
}
