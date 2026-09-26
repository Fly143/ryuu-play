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

export class Weezing_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Toxic Virus", powerType: PowerType.ABILITY, text: "At any time between turns, each player puts 1 more damage counter on his or her Poisoned Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Offensive Gas", cost: [], damage: "30", text: "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned." }
  ];
  public set: string = "GE";
  public name: string = "Weezing";
  public fullName: string = "Weezing GE 31";
  public text: string = "Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
