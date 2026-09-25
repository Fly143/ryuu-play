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

export class Luvdisc_44 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Even Game", cost: [], damage: "", text: "Search your deck for a number of Basic Pokémon up to the number of your opponent's Benched Pokémon and put those Pokémon onto your Bench. Then, shuffle your deck." },
      { name: "Water Pulse", cost: [], damage: "20", text: "Your opponent's Active Pokémon is now Asleep." }
  ];
  public set: string = "CES";
  public name: string = "Luvdisc";
  public fullName: string = "Luvdisc CES 44";
  public text: string = "Luvdisc";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchBasicToBench(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.ASLEEP);
    }
    return state;
  }
}
