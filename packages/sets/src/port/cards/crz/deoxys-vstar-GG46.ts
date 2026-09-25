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

export class DeoxysVSTARGG46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Deoxys V";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psychic Javelin", cost: [], damage: "190", text: "This attack also does 60 damage to 1 of your opponent's Benched Pokémon V. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Star Force", cost: [], damage: "60×", text: "This attack does 60 damage for each Energy attached to both Active Pokémon. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "CRZ";
  public name: string = "Deoxys VSTAR";
  public fullName: string = "Deoxys VSTAR CRZ GG46";
  public text: string = "Deoxys VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageOneOpponent(this, store, state, effect).use(effect, 60);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "bonusPerEnergyBoth:60");
    }
    return state;
  }
}
