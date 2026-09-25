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

export class Steelix_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Outbreak Power", cost: [], damage: "", text: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Steelix. This attack does 20 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Iron Tail", cost: [], damage: "100×", text: "Flip a coin until you get tails. This attack does 100 damage times the number of heads." }
  ];
  public set: string = "PL";
  public name: string = "Steelix";
  public fullName: string = "Steelix PL 28";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipUntilTailsDamage(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
