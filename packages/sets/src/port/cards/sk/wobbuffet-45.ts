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

export class Wobbuffet_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Mirror Coat", powerType: PowerType.ABILITY, text: "If Wobbuffet becomes Poisoned or Burned by the Defending Pokémon's attack during your opponent's turn, the Defending Pokémon becomes affected by the same Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Return Attack", cost: [], damage: "10×", text: "Flip 2 coins. If either is heads, this attack does 10 damage times the number of damage counters on Wobbuffet." }
  ];
  public set: string = "SK";
  public name: string = "Wobbuffet";
  public fullName: string = "Wobbuffet SK 45";
  public text: string = "Wobbuffet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTimesSelfCounters(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
