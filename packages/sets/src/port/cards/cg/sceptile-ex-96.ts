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

export class SceptileEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Extra Liquid", powerType: PowerType.ABILITY, text: "Each player's Pokémon-ex can't use any Poké-Powers and pays Colorless more Energy to use its attacks. Each Pokémon can't be affected by more than 1 Extra Liquid Poké-Body.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Power Revenge", cost: [], damage: "60+", text: "Does 60 damage plus 10 more damage for each Prize card your opponent has taken." }
  ];
  public set: string = "CG";
  public name: string = "Sceptile ex δ";
  public fullName: string = "Sceptile ex δ CG 96";
  public text: string = "Sceptile ex δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
