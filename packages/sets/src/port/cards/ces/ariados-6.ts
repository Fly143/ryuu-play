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

export class Ariados_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spinarak";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reactive Poison", cost: [], damage: "20+", text: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon." },
      { name: "Spider Trap", cost: [], damage: "", text: "You may switch 1 of your opponent's Benched Pokémon with their Active Pokémon. Your opponent's Active Pokémon is now Asleep and Poisoned." }
  ];
  public set: string = "CES";
  public name: string = "Ariados";
  public fullName: string = "Ariados CES 6";
  public text: string = "Ariados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerSpecialConditions:50");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gustOpponent(this, store, state, effect).use(effect);
    }
    return state;
  }
}
