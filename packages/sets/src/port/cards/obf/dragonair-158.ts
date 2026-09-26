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

export class Dragonair_158 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dratini";
  public hp: number = 100;
    public height?: number = 4.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ram", cost: [], damage: "30", text: "" },
      { name: "Dragon Tail", cost: [], damage: "70×", text: "Flip 2 coins. This attack does 70 damage for each heads." }
  ];
  public set: string = "OBF";
  public name: string = "Dragonair";
  public fullName: string = "Dragonair OBF 158";
  public text: string = "Dragonair";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 70);
    }
    return state;
  }
}
