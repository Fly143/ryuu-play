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

export class Toucannon_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Trumbeak";
  public hp: number = 140;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Echoed Voice", cost: [], damage: "60", text: "During your next turn, this Pokémon's Echoed Voice attack does 60 more damage (before applying Weakness and Resistance)." },
      { name: "Beak Blast", cost: [], damage: "100", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned." }
  ];
  public set: string = "SUM";
  public name: string = "Toucannon";
  public fullName: string = "Toucannon SUM 108";
  public text: string = "Toucannon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
