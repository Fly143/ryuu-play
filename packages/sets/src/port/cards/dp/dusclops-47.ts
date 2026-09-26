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

export class Dusclops_47 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duskull";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Roam", cost: [], damage: "", text: "Flip a coin. If heads, put 2 damage counters on each of your opponent's Pokémon. If tails, put 2 damage counters on 1 of your Pokémon." },
      { name: "Gravity Wave", cost: [], damage: "30", text: "Does 10 damage to each of your opponent's Benched Pokémon that doesn't have a Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DP";
  public name: string = "Dusclops";
  public fullName: string = "Dusclops DP 47";
  public text: string = "Dusclops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersEachOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
