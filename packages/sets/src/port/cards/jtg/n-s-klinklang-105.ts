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

export class NSKlinklang_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "N's Klang";
  public hp: number = 160;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Blast", cost: [], damage: "50", text: "" },
      { name: "Triple Smash", cost: [], damage: "120×", text: "Flip 3 coins. This attack does 120 damage for each heads." }
  ];
  public set: string = "JTG";
  public name: string = "N's Klinklang";
  public fullName: string = "N's Klinklang JTG 105";
  public text: string = "N's Klinklang";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 120);
    }
    return state;
  }
}
