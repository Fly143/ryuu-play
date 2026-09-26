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

export class Crabominable_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Crabrawler";
  public hp: number = 150;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Double Lariat", cost: [], damage: "90×", text: "Flip 2 coins. This attack does 90 damage for each heads." },
      { name: "Crabhammer", cost: [], damage: "130", text: "" }
  ];
  public set: string = "BST";
  public name: string = "Crabominable";
  public fullName: string = "Crabominable BST 85";
  public text: string = "Crabominable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 90);
    }
    return state;
  }
}
