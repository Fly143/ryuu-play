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

export class Maractus_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Exciting Shake", cost: [], damage: "", text: "During your next turn, flip 6 coins instead of 2 for this Pokémon's Prickly Needles attack." },
      { name: "Prickly Needles", cost: [], damage: "20×", text: "Flip 2 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "FLF";
  public name: string = "Maractus";
  public fullName: string = "Maractus FLF 10";
  public text: string = "Maractus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 20);
    }
    return state;
  }
}
