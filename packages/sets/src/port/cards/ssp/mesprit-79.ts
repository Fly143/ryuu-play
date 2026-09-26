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

export class Mesprit_79 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Full Heart", cost: [], damage: "", text: "Attach up to 2 Basic Psychic Energy cards from your hand to your Pokémon in any way you like." },
      { name: "Guardian Burst", cost: [], damage: "160", text: "If you don't have Uxie and Azelf on your Bench, this attack does nothing." }
  ];
  public set: string = "SSP";
  public name: string = "Mesprit";
  public fullName: string = "Mesprit SSP 79";
  public text: string = "Mesprit";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
