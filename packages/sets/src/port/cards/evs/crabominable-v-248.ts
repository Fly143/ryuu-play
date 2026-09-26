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

export class CrabominableV_248 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
    public height?: number = 1.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Trigger Avalanche", cost: [], damage: "", text: "Discard the top 2 cards of your opponent's deck." },
      { name: "Destroyer Punch", cost: [], damage: "90+", text: "This attack does 60 more damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Crabominable V";
  public fullName: string = "Crabominable V EVS 248";
  public text: string = "Crabominable V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.millOpponent(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusPerDefendingDamageCounter(this, store, state, effect).use(effect, 60);
    }
    return state;
  }
}
