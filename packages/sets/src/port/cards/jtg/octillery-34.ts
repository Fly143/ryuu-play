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

export class Octillery_343 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Remoraid";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Aqua Wash", cost: [], damage: "20", text: "You may put an Energy attached to your opponent's Active Pokémon into their hand." },
      { name: "Octo Beatdown", cost: [], damage: "90×", text: "Flip a coin until you get tails. This attack does 90 damage for each heads." }
  ];
  public set: string = "JTG";
  public name: string = "Octillery";
  public fullName: string = "Octillery JTG 34";
  public text: string = "Octillery";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 90);
    }
    return state;
  }
}
