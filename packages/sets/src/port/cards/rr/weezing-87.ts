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

export class Weezing_87 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Koffing";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Camouflage Gas", powerType: PowerType.ABILITY, text: "If Weezing is Confused and is Knocked Out, your opponent can't take a Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Damage Breakdown", cost: [], damage: "", text: "Count the number of damage counters on Weezing. Put that many damage counters on the Defending Pokémon and Weezing is now Confused." },
      { name: "Smog", cost: [], damage: "20", text: "The Defending Pokémon is now Poisoned." }
  ];
  public set: string = "RR";
  public name: string = "Weezing";
  public fullName: string = "Weezing RR 87";
  public text: string = "Weezing";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
