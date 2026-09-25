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

export class MistySMagikarp_88 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Play Dead", cost: [], damage: "", text: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Misty's Magikarp." },
      { name: "Leap", cost: [], damage: "10", text: "" }
  ];
  public set: string = "G2";
  public name: string = "Misty's Magikarp";
  public fullName: string = "Misty's Magikarp G2 88";
  public text: string = "Misty's Magikarp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
