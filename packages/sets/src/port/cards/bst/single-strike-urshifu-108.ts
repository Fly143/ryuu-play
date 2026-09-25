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

export class SingleStrikeUrshifu_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kubfu";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Field Crush", cost: [], damage: "50", text: "If your opponent has a Stadium in play, discard it." },
      { name: "Fists of Strife", cost: [], damage: "100+", text: "If this Pokémon has any damage counters on it, this attack does 100 more damage." }
  ];
  public set: string = "BST";
  public name: string = "Single Strike Urshifu";
  public fullName: string = "Single Strike Urshifu BST 108";
  public text: string = "Single Strike Urshifu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 100, 1);
    }
    return state;
  }
}
