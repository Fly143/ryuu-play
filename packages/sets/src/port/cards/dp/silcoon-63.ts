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

export class Silcoon_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wurmple";
  public hp: number = 80;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Harden", cost: [], damage: "", text: "During your opponent's next turn, If Silcoon would be damaged by an attack, prevent that attack's damage done to Silcoon if that damage is 30 or less." },
      { name: "Entangling String", cost: [], damage: "20", text: "Flip a coin. If heads, the Defending Pokémon can't attack during your opponent's next turn." }
  ];
  public set: string = "DP";
  public name: string = "Silcoon";
  public fullName: string = "Silcoon DP 63";
  public text: string = "Silcoon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
