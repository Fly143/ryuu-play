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

export class TsareenaEx_46 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Steenee";
  public hp: number = 310;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Icicle Sole", cost: [], damage: "", text: "Put damage counters on 1 of your opponent's Pokémon until its remaining HP is 30." },
      { name: "Trop Kick", cost: [], damage: "180", text: "Heal 30 damage from this Pokémon, and it recovers from all Special Conditions." }
  ];
  public set: string = "PAR";
  public name: string = "Tsareena ex";
  public fullName: string = "Tsareena ex PAR 46";
  public text: string = "Tsareena ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
