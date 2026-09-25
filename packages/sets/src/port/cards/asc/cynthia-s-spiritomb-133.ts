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

export class CynthiaSSpiritomb_133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Raging Curse", cost: [], damage: "10×", text: "This attack does 10 damage for each damage counter on all of your Benched Cynthia's Pokémon. This attack's damage isn't affected by Weakness." }
  ];
  public set: string = "ASC";
  public name: string = "Cynthia's Spiritomb";
  public fullName: string = "Cynthia's Spiritomb ASC 133";
  public text: string = "Cynthia's Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerDamagedBenchAll:10");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
