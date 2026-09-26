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

export class MedichamEx_161 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Meditite";
  public hp: number = 260;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Chi-Atsu", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 50." },
      { name: "Yoga Kick", cost: [], damage: "190", text: "This attack's damage isn't affected by Weakness or Resistance." }
  ];
  public set: string = "SCR";
  public name: string = "Medicham ex";
  public fullName: string = "Medicham ex SCR 161";
  public text: string = "Medicham ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
