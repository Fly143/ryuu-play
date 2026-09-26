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

export class ErikaSGloom_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Erika's Oddish";
  public hp: number = 60;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Pollen", cost: [], damage: "", text: "Flip a coin. If heads, remove 4 damage counters from Erika's Gloom. If Erika's Gloom has fewer damage counters than that, remove all of them." },
      { name: "Magic Pollen", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Asleep, Confused, Paralyzed, or Poisoned (your choice)." }
  ];
  public set: string = "G1";
  public name: string = "Erika's Gloom";
  public fullName: string = "Erika's Gloom G1 45";
  public text: string = "Erika's Gloom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
