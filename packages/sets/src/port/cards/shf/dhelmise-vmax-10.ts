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

export class DhelmiseVMAX_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dhelmise V";
  public hp: number = 330;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swinging Chain", cost: [], damage: "", text: "This attack does 30 damage to 1 of your opponent's Pokémon for each Grass Energy attached to this Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Max Anchor", cost: [], damage: "240", text: "During your next turn, this Pokémon can't use Max Anchor." }
  ];
  public set: string = "SHF";
  public name: string = "Dhelmise VMAX";
  public fullName: string = "Dhelmise VMAX SHF 10";
  public text: string = "Dhelmise VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
