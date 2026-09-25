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

export class RaichuH25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Pikachu";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zzzap", cost: [], damage: "", text: "This attack does 20 damage to each Pokémon with a Poké-Body or Poké-Power (yours and your opponent's). (Don't apply Weakness or Resistance.)" },
      { name: "Lightning Storm", cost: [], damage: "50", text: "Flip a coin. If tails, put 2 damage counters on Raichu." }
  ];
  public set: string = "SK";
  public name: string = "Raichu";
  public fullName: string = "Raichu SK H25";
  public text: string = "Raichu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
