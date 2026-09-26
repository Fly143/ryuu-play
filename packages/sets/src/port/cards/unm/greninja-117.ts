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

export class Greninja_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Frogadier";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bring Down", cost: [], damage: "", text: "The Pokémon that has the least HP remaining, except for this Pokémon, is Knocked Out. (If multiple Pokémon are tied, choose one.)" },
      { name: "Mist Slash", cost: [], damage: "70", text: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon." }
  ];
  public set: string = "UNM";
  public name: string = "Greninja";
  public fullName: string = "Greninja UNM 117";
  public text: string = "Greninja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
