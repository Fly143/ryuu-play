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

export class Steelix_247 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Onix";
  public hp: number = 170;
    public height?: number = 9.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Thumping Fall", cost: [], damage: "50×", text: "Discard any number of Pokémon with a Retreat Cost of exactly 4 from your hand. This attack does 50 damage for each card you discarded in this way." },
      { name: "Iron Tail", cost: [], damage: "100×", text: "Flip a coin until you get tails. This attack does 100 damage for each heads." }
  ];
  public set: string = "CEC";
  public name: string = "Steelix";
  public fullName: string = "Steelix CEC 247";
  public text: string = "Steelix";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 100);
    }
    return state;
  }
}
