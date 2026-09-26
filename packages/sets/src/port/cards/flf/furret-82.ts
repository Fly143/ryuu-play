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

export class Furret_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sentret";
  public hp: number = 90;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Buried Treasure Hunt", cost: [], damage: "", text: "Look at the top 4 cards of your deck and put 2 of them into your hand. Discard the other cards." },
      { name: "Slam", cost: [], damage: "30×", text: "Flip 2 coins. This attack does 30 damage times the number of heads." }
  ];
  public set: string = "FLF";
  public name: string = "Furret";
  public fullName: string = "Furret FLF 82";
  public text: string = "Furret";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 30);
    }
    return state;
  }
}
