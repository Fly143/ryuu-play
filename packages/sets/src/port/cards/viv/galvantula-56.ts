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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Galvantula_56 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Joltik";
  public hp: number = 90;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stun Needle", cost: [], damage: "20", text: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed." },
      { name: "Shocking Pursuit", cost: [], damage: "20×", text: "This attack does 20 damage for each damage counter on your opponent's Active Pokémon." }
  ];
  public set: string = "VIV";
  public name: string = "Galvantula";
  public fullName: string = "Galvantula VIV 56";
  public text: string = "Galvantula";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipHeadsSpecialCondition(this, store, state, effect).use(effect, SpecialCondition.PARALYZED);
    }
    return state;
  }
}
