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

export class Mamoswine_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Piloswine";
  public hp: number = 150;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Frost Stone", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed." },
      { name: "Continuous Headbutt", cost: [], damage: "90×", text: "Flip a coin until you get tails. This attack does 90 damage times the number of heads." }
  ];
  public set: string = "PLB";
  public name: string = "Mamoswine";
  public fullName: string = "Mamoswine PLB 28";
  public text: string = "Mamoswine";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 90);
    }
    return state;
  }
}
