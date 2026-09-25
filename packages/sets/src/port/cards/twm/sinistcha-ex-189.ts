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

export class SinistchaEx_189 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Poltchageist";
  public hp: number = 240;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Re-Brew", cost: [], damage: "", text: "Put 2 damage counters on 1 of your opponent's Pokémon for each Basic Grass Energy card in your discard pile. Then, shuffle those Energy cards into your deck." },
      { name: "Matcha Splash", cost: [], damage: "120", text: "Heal 30 damage from each of your Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Sinistcha ex";
  public fullName: string = "Sinistcha ex TWM 189";
  public text: string = "Sinistcha ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
