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

export class TeamMagmaSAggron_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Lairon";
  public hp: number = 140;
    public height?: number = 2.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Stomp", cost: [], damage: "40×", text: "Discard as many Fighting Energy attached to your Pokémon as you like. This attack does 40 damage times the amount of Fighting Energy you discarded." },
      { name: "Boulder Storm", cost: [], damage: "120", text: "This attack does 20 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "DCR";
  public name: string = "Team Magma's Aggron";
  public fullName: string = "Team Magma's Aggron DCR 14";
  public text: string = "Team Magma's Aggron";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
