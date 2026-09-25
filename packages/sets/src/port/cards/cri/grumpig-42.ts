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

export class Grumpig_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Spoink";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Own Tempo", powerType: PowerType.ABILITY, text: "This Pokémon can't be Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Psych Up", cost: [], damage: "60", text: "During your next turn, this Pokémon's Psych Up attack does 60 more damage (before applying Weakness and Resistance)." }
  ];
  public set: string = "CRI";
  public name: string = "Grumpig";
  public fullName: string = "Grumpig CRI 42";
  public text: string = "Grumpig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
