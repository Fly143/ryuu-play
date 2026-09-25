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

export class Watchog_85 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Patrat";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Held-Item Inspection", cost: [], damage: "", text: "Your opponent reveals his or her hand. Choose an Item card you find there. Your opponent shuffles that card into his or her deck." },
      { name: "Thorough Crunch", cost: [], damage: "30", text: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "FFI";
  public name: string = "Watchog";
  public fullName: string = "Watchog FFI 85";
  public text: string = "Watchog";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.peekOpponentHand(this, store, state, effect).use(effect);
    }
    return state;
  }
}
