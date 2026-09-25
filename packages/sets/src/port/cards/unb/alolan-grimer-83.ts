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

export class AlolanGrimer_832 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chemical Breath", cost: [], damage: "20+", text: "This attack does 50 more damage for each Special Condition affecting your opponent's Active Pokémon." }
  ];
  public set: string = "UNB";
  public name: string = "Alolan Grimer";
  public fullName: string = "Alolan Grimer UNB 83";
  public text: string = "Alolan Grimer";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerSpecialConditions:50");
    }
    return state;
  }
}
