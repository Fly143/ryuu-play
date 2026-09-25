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

export class InfernapeE4_43 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Split Bomb", cost: [], damage: "", text: "Choose 2 of your opponent's Pokémon. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "High Jump Kick", cost: [], damage: "50", text: "" }
  ];
  public set: string = "RR";
  public name: string = "Infernape E4";
  public fullName: string = "Infernape E4 RR 43";
  public text: string = "Infernape E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
