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

export class Bellossom_4 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gloom";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Grass Knot", cost: [], damage: "10+", text: "Does 20 more damage for each Colorless in the Defending Pokémon's Retreat Cost." },
      { name: "Petal Dance", cost: [], damage: "50×", text: "Flip 3 coins. This attack does 50 damage times the number of heads. This Pokémon is now Confused." }
  ];
  public set: string = "PLS";
  public name: string = "Bellossom";
  public fullName: string = "Bellossom PLS 4";
  public text: string = "Bellossom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* bonusPerRetreatCostColorless:20 */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 50);
    }
    return state;
  }
}
