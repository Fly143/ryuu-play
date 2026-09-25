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

export class Weedle_862 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rescue String", cost: [], damage: "", text: "Search your discard pile for up to 5 Pokémon, show them to your opponent, and shuffle them into your deck." },
      { name: "Needling Sting", cost: [], damage: "10+", text: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage." }
  ];
  public set: string = "RR";
  public name: string = "Weedle";
  public fullName: string = "Weedle RR 86";
  public text: string = "Weedle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
