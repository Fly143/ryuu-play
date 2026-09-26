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

export class Jigglypuff_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Doubleslap", cost: [], damage: "10×", text: "Flip 2 coins. This attack does 10 damage times the number of heads." },
      { name: "Rest", cost: [], damage: "", text: "Remove all Special Conditions and 3 damage counters from Jigglypuff (all if there are less than 3). Jigglypuff is now Asleep." }
  ];
  public set: string = "MA";
  public name: string = "Jigglypuff";
  public fullName: string = "Jigglypuff MA 41";
  public text: string = "Jigglypuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 10);
    }
    return state;
  }
}
