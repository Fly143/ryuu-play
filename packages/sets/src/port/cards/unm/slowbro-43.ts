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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Slowbro_432 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Yawn", cost: [], damage: "", text: "Your opponent's Active Pokémon is now Asleep." },
      { name: "Three Strikes", cost: [], damage: "100×", text: "Flip 3 coins. This attack does 100 damage for each heads. If all of them are tails, you lose this game." }
  ];
  public set: string = "UNM";
  public name: string = "Slowbro";
  public fullName: string = "Slowbro UNM 43";
  public text: string = "Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 100);
    }
    return state;
  }
}
