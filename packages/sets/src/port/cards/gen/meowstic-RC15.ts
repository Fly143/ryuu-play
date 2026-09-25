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

export class MeowsticRC15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Espurr";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ear Influence", cost: [], damage: "", text: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like." },
      { name: "Psychic", cost: [], damage: "60+", text: "Does 10 more damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "GEN";
  public name: string = "Meowstic";
  public fullName: string = "Meowstic GEN RC15";
  public text: string = "Meowstic";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.plusPower(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
