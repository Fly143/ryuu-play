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

export class MistySSeadra_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misty's Horsea";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Snap", cost: [], damage: "20", text: "" },
      { name: "Knockout Needle", cost: [], damage: "30+", text: "Flip 2 coins. If both of them are heads, this attack does 30 damage plus 60 more damage. If 1 or both of them are tails, this attack does 30 damage." }
  ];
  public set: string = "G1";
  public name: string = "Misty's Seadra";
  public fullName: string = "Misty's Seadra G1 9";
  public text: string = "Misty's Seadra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
