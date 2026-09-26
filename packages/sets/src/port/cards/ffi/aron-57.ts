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

export class Aron_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Iron Head", cost: [], damage: "10×", text: "Flip a coin until you get tails. This attack does 10 damage times the number of heads." },
      { name: "Headbutt", cost: [], damage: "30", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Aron";
  public fullName: string = "Aron FFI 57";
  public text: string = "Aron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
