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

export class Drowzee_542 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Insomnia", powerType: PowerType.ABILITY, text: "Drowzee can't be Asleep.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Soothing Wave", cost: [], damage: "10", text: "Flip a coin. If heads, each Defending Pokémon is now Asleep." }
  ];
  public set: string = "TRR";
  public name: string = "Drowzee";
  public fullName: string = "Drowzee TRR 54";
  public text: string = "Drowzee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
