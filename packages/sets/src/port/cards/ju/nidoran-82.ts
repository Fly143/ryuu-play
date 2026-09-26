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

export class Nidoran_82 extends PokemonCard {
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
      { name: "Fury Swipes", cost: [], damage: "10×", text: "Flip 3 coins. This attack does 10 damage times the number of heads." },
      { name: "Call for Family", cost: [], damage: "", text: "Search your deck for a Basic Pokémon named Nidoran ♂ or Nidoran ♀ and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)" }
  ];
  public set: string = "JU";
  public name: string = "Nidoran ♀";
  public fullName: string = "Nidoran ♀ JU 82";
  public text: string = "Nidoran ♀";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
