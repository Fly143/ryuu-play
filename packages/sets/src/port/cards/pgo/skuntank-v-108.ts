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

export class SkuntankV_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pursuit Blast", cost: [], damage: "", text: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. If that Pokémon retreated from the Active Spot during your opponent's last turn, this attack does 120 damage instead. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Shrieking Poison", cost: [], damage: "90", text: "Your opponent's Active Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "PGO";
  public name: string = "Skuntank V";
  public fullName: string = "Skuntank V PGO 108";
  public text: string = "Skuntank V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
