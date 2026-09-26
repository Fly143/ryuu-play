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

export class Snorlax_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rest Up", powerType: PowerType.ABILITY, text: "If Snorlax remains Asleep between turns, remove 2 damage counters from Snorlax (remove 1 if there is only 1).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Collapse", cost: [], damage: "10", text: "Snorlax is now Asleep." },
      { name: "Toss and Turn", cost: [], damage: "30+", text: "If Snorlax is Asleep, this attack does 30 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)" }
  ];
  public set: string = "RG";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax RG 15";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
