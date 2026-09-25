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

export class Braviary_93 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rufflet";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ambush", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 50 more damage." },
      { name: "Sky Drop", cost: [], damage: "120-", text: "This attack does 120 damage minus 20 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." }
  ];
  public set: string = "STS";
  public name: string = "Braviary";
  public fullName: string = "Braviary STS 93";
  public text: string = "Braviary";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 50, 1);
    }
    return state;
  }
}
