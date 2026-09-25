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

export class Toedscruel_26 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Toedscool";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Eerie Tentacles", cost: [], damage: "30", text: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon." },
      { name: "Triple Smash", cost: [], damage: "80×", text: "Flip 3 coins. This attack does 80 damage for each heads." }
  ];
  public set: string = "SVI";
  public name: string = "Toedscruel";
  public fullName: string = "Toedscruel SVI 26";
  public text: string = "Toedscruel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 80);
    }
    return state;
  }
}
