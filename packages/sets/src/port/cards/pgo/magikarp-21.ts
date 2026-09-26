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

export class Magikarp_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lively Grouping", cost: [], damage: "", text: "Search your deck for any number of Magikarp, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Raging Fin", cost: [], damage: "10+", text: "This attack does 30 more damage for each Magikarp and Gyarados in your discard pile." }
  ];
  public set: string = "PGO";
  public name: string = "Magikarp";
  public fullName: string = "Magikarp PGO 21";
  public text: string = "Magikarp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    return state;
  }
}
