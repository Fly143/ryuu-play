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

export class HoOhHGSS01 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Combustion", cost: [], damage: "20", text: "" },
      { name: "Sacred Fire", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "PR-HS";
  public name: string = "Ho-Oh";
  public fullName: string = "Ho-Oh PR-HS HGSS01";
  public text: string = "Ho-Oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 80);
    }
    return state;
  }
}
