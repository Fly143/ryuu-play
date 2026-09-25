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

export class TeamRocketSHypno_80 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Rocket's Drowzee";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psyshot", cost: [], damage: "40", text: "" },
      { name: "Bench Manipulation", cost: [], damage: "80×", text: "Your opponent flips a coin for each of their Benched Pokémon. This attack does 80 damage to your opponent's Active Pokémon for each tails. This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "DRI";
  public name: string = "Team Rocket's Hypno";
  public fullName: string = "Team Rocket's Hypno DRI 80";
  public text: string = "Team Rocket's Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
