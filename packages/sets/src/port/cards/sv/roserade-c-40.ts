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

export class RoseradeC_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Natural Cure", powerType: PowerType.ABILITY, text: "When you attach an Energy card from your hand to Roserade C, remove all Special Conditions from Roserade C.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magical Leaf", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage and remove 2 damage counters from Roserade C." }
  ];
  public set: string = "SV";
  public name: string = "Roserade C";
  public fullName: string = "Roserade C SV 40";
  public text: string = "Roserade C";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
