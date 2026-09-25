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

export class CopperajahVMAX_137 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Copperajah V";
  public hp: number = 340;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dangerous Nose", cost: [], damage: "100+", text: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 100 more damage." },
      { name: "G-Max Hammer", cost: [], damage: "240", text: "" }
  ];
  public set: string = "RCL";
  public name: string = "Copperajah VMAX";
  public fullName: string = "Copperajah VMAX RCL 137";
  public text: string = "Copperajah VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
