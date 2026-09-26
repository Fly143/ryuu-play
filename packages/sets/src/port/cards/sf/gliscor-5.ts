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

export class Gliscor_5 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gligar";
  public hp: number = 80;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Burning Poison", cost: [], damage: "", text: "Choose either Burned or Poisoned. The Defending Pokémon is now affected by that Special Condition. You may return Gliscor and all cards attached to it to your hand." },
      { name: "Pester", cost: [], damage: "40+", text: "If the Defending Pokémon is affected by a Special Condition, this attack does 40 damage plus 40 more damage." }
  ];
  public set: string = "SF";
  public name: string = "Gliscor";
  public fullName: string = "Gliscor SF 5";
  public text: string = "Gliscor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.scoopUpSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
