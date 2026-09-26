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

export class Gyarados_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magikarp";
  public hp: number = 170;
    public height?: number = 6.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wreak Havoc", cost: [], damage: "", text: "Flip a coin until you get tails. For each heads, discard the top 2 cards of your opponent's deck." },
      { name: "Wild Splash", cost: [], damage: "230", text: "Discard the top 5 cards of your deck." }
  ];
  public set: string = "PGO";
  public name: string = "Gyarados";
  public fullName: string = "Gyarados PGO 22";
  public text: string = "Gyarados";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.millSelf(this, store, state, effect).use(effect, 5);
    }
    return state;
  }
}
