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

export class Maractus_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Zzzt", cost: [], damage: "20", text: "" },
      { name: "Powerful Needles", cost: [], damage: "60×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 60 damage for each heads." }
  ];
  public set: string = "SSH";
  public name: string = "Maractus";
  public fullName: string = "Maractus SSH 7";
  public text: string = "Maractus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 1, 60);
    }
    return state;
  }
}
