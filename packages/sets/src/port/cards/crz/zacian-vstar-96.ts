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

export class ZacianVSTAR_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zacian V";
  public hp: number = 270;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Break Edge", cost: [], damage: "200", text: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." },
      { name: "Sword Star", cost: [], damage: "310", text: "This Pokémon also does 30 damage to itself. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "CRZ";
  public name: string = "Zacian VSTAR";
  public fullName: string = "Zacian VSTAR CRZ 96";
  public text: string = "Zacian VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
