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

export class TyphlosionSM185 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Quilava";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Exploder", cost: [], damage: "", text: "Search your deck for up to 3 Fire Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck." },
      { name: "Bursting Inferno", cost: [], damage: "100", text: "Your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "PR-SM";
  public name: string = "Typhlosion";
  public fullName: string = "Typhlosion PR-SM SM185";
  public text: string = "Typhlosion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
