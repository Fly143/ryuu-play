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

export class BlaineSRhyhorn_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Horn Charge", cost: [], damage: "30", text: "Flip a coin. If tails, this attack does nothing." },
      { name: "Overrun", cost: [], damage: "20", text: "Flip a coin. If heads and if your opponent has any Benched Pokémon, choose 1 of them and this attack does 20 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "G2";
  public name: string = "Blaine's Rhyhorn";
  public fullName: string = "Blaine's Rhyhorn G2 65";
  public text: string = "Blaine's Rhyhorn";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
