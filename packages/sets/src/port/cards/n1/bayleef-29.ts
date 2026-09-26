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

export class Bayleef_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chikorita";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Sweet Scent", cost: [], damage: "", text: "Flip a coin. If heads and if any of your Pokémon have any damage counters on them, then remove 2 damage counters from 1 of them (or 1 if it only has 1). If tails and if any of your opponent's Pokémon have any damage counters on them, choose 1 of them and remove 2 damage counters from it (or 1 if it only has 1)." },
      { name: "Double Razor Leaf", cost: [], damage: "40×", text: "Flip 2 coins. This attack does 40 damage times the number of heads." }
  ];
  public set: string = "N1";
  public name: string = "Bayleef";
  public fullName: string = "Bayleef N1 29";
  public text: string = "Bayleef";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 40);
    }
    return state;
  }
}
