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

export class Goodra_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sliggoo";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Liquid Blow", cost: [], damage: "", text: "This attack does 20 damage to 1 of your opponent's Pokémon for each Colorless in its Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Shining Breath", cost: [], damage: "110", text: "During your opponent's next turn, this Pokémon can't be affected by any Special Conditions." }
  ];
  public set: string = "BKT";
  public name: string = "Goodra";
  public fullName: string = "Goodra BKT 60";
  public text: string = "Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsSelf");
    }
    return state;
  }
}
