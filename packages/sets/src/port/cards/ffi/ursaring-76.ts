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

export class Ursaring_76 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Teddiursa";
  public hp: number = 130;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Adrenalash", cost: [], damage: "50", text: "During your next turn, each of this Pokémon's attacks does 50 more damage (before applying Weakness and Resistance)." },
      { name: "Strength", cost: [], damage: "80", text: "" }
  ];
  public set: string = "FFI";
  public name: string = "Ursaring";
  public fullName: string = "Ursaring FFI 76";
  public text: string = "Ursaring";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 0, 0);
    }
    return state;
  }
}
