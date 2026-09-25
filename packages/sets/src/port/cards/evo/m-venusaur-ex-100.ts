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

export class MVenusaurEX_100 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Venusaur-EX";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crisis Vine", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Paralyzed and Poisoned." }
  ];
  public set: string = "EVO";
  public name: string = "M Venusaur-EX";
  public fullName: string = "M Venusaur-EX EVO 100";
  public text: string = "M Venusaur-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
