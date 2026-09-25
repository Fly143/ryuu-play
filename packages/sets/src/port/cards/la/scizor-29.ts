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

export class Scizor_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Scyther";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Special Blow", cost: [], damage: "30+", text: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 50 more damage." },
      { name: "X-Scissor", cost: [], damage: "50+", text: "Flip a coin. If heads, this attack does 50 damage plus 40 more damage." }
  ];
  public set: string = "LA";
  public name: string = "Scizor";
  public fullName: string = "Scizor LA 29";
  public text: string = "Scizor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
