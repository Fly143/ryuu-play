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

export class CrobatVMAX_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Crobat V";
  public hp: number = 300;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stealth Poison", cost: [], damage: "70", text: "Your opponent's Active Pokémon is now Poisoned. Switch this Pokémon with 1 of your Benched Pokémon." },
      { name: "Max Cutter", cost: [], damage: "180", text: "" }
  ];
  public set: string = "SHF";
  public name: string = "Crobat VMAX";
  public fullName: string = "Crobat VMAX SHF 45";
  public text: string = "Crobat VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
