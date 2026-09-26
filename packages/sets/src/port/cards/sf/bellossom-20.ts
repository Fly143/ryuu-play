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

export class Bellossom_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 100;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Parallel Gain", cost: [], damage: "30", text: "Remove 1 damage counter from each of your Pokémon." },
      { name: "Blend Pollen", cost: [], damage: "40+", text: "Does 40 damage plus 20 more damage for each Vileplume and each Bellossom you have in play. Flip a coin. If heads, the Defending Pokémon is now Burned." }
  ];
  public set: string = "SF";
  public name: string = "Bellossom";
  public fullName: string = "Bellossom SF 20";
  public text: string = "Bellossom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.BURNED);
    }
    return state;
  }
}
