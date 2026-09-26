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

export class Doublade_134 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Honedge";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "30", text: "" },
      { name: "Double Slash", cost: [], damage: "80×", text: "Flip 2 coins. This attack does 80 damage for each heads." }
  ];
  public set: string = "RCL";
  public name: string = "Doublade";
  public fullName: string = "Doublade RCL 134";
  public text: string = "Doublade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 80);
    }
    return state;
  }
}
