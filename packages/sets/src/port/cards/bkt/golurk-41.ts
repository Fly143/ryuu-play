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

export class Golurk_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Golett";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dig Out", cost: [], damage: "20", text: "Discard the top card of your deck. If that card is a Fighting Energy card, attach it to this Pokémon." },
      { name: "Double Lariat", cost: [], damage: "90×", text: "Flip 2 coins. This attack does 90 damage times the number of heads." }
  ];
  public set: string = "BKT";
  public name: string = "Golurk";
  public fullName: string = "Golurk BKT 41";
  public text: string = "Golurk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 2, 90);
    }
    return state;
  }
}
