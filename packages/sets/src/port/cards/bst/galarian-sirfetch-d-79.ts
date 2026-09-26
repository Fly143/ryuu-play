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

export class GalarianSirfetchD_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Farfetch'd";
  public hp: number = 130;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Peck", cost: [], damage: "40", text: "" },
      { name: "Leek Strike", cost: [], damage: "70+", text: "If this Pokémon has a Pokémon Tool attached, this attack does 90 more damage, and this attack's damage isn't affected by Resistance." }
  ];
  public set: string = "BST";
  public name: string = "Galarian Sirfetch'd";
  public fullName: string = "Galarian Sirfetch'd BST 79";
  public text: string = "Galarian Sirfetch'd";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    return state;
  }
}
