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

export class Xatu_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Natu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Creepy Wind", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Confused." },
      { name: "Life Drain", cost: [], damage: "", text: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10." }
  ];
  public set: string = "CEC";
  public name: string = "Xatu";
  public fullName: string = "Xatu CEC 79";
  public text: string = "Xatu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
