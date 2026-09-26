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

export class Vikavolt_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charjabug";
  public hp: number = 160;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Volt Switch", cost: [], damage: "90", text: "Switch this Pokémon with 1 of your Benched Lightning Pokémon." },
      { name: "Sparking Strike", cost: [], damage: "240", text: "" }
  ];
  public set: string = "ASC";
  public name: string = "Vikavolt";
  public fullName: string = "Vikavolt ASC 66";
  public text: string = "Vikavolt";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
