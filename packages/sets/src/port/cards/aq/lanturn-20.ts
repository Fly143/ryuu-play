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

export class Lanturn_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chinchou";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lightning Ball", cost: [], damage: "20", text: "" },
      { name: "Conduction", cost: [], damage: "30+", text: "Discard all Lightning Energy cards attached to Lanturn. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage plus 40 more damage for each heads." }
  ];
  public set: string = "AQ";
  public name: string = "Lanturn";
  public fullName: string = "Lanturn AQ 20";
  public text: string = "Lanturn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
