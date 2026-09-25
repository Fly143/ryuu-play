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

export class Registeel_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regi Gate", cost: [], damage: "", text: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck." },
      { name: "Heavy Slam", cost: [], damage: "220-", text: "This attack does 50 less damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "BRS";
  public name: string = "Registeel";
  public fullName: string = "Registeel BRS 108";
  public text: string = "Registeel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
