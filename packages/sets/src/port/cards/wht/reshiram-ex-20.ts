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

export class ReshiramEx_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Slash", cost: [], damage: "50", text: "" },
      { name: "Blazing Burst", cost: [], damage: "130+", text: "This attack does 50 more damage for each Prize card your opponent has taken. Discard an Energy from this Pokémon." }
  ];
  public set: string = "WHT";
  public name: string = "Reshiram ex";
  public fullName: string = "Reshiram ex WHT 20";
  public text: string = "Reshiram ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerPrize(this, store, state, effect).use(effect, 50);
    }
    return state;
  }
}
