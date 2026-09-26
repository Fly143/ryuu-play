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

export class LarrySDudunsparceEx_164 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Larry's Dunsparce";
  public hp: number = 270;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Work Rush", cost: [], damage: "80×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 80 damage for each heads." }
  ];
  public set: string = "ASC";
  public name: string = "Larry's Dudunsparce ex";
  public fullName: string = "Larry's Dudunsparce ex ASC 164";
  public text: string = "Larry's Dudunsparce ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 80);
    }
    return state;
  }
}
