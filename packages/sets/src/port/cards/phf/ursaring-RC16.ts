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

export class UrsaringRC16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Teddiursa";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Picnic Weather", cost: [], damage: "", text: "Put a Teddiursa from your discard pile onto your Bench. Then, attach an Energy card from your discard pile to that Pokémon." },
      { name: "Fury Swipes", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage times the number of heads." }
  ];
  public set: string = "PHF";
  public name: string = "Ursaring";
  public fullName: string = "Ursaring PHF RC16";
  public text: string = "Ursaring";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscardToBench");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    return state;
  }
}
