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

export class Cinccino_125 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Minccino";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slap", cost: [], damage: "40", text: "" },
      { name: "Triple Axel", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage for each heads." }
  ];
  public set: string = "FST";
  public name: string = "Cinccino";
  public fullName: string = "Cinccino FST 125";
  public text: string = "Cinccino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    return state;
  }
}
