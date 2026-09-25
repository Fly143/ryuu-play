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

export class Primeape_50 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mankey";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Wreck", cost: [], damage: "30+", text: "If there is any Stadium card in play, this attack does 30 damage plus 30 more damage. Discard that Stadium card." },
      { name: "Flames of Rage", cost: [], damage: "10+", text: "Discard 2 Energy attached to Primeape. This attack does 10 damage plus 20 more damage for each damage counter on Primeape." }
  ];
  public set: string = "HP";
  public name: string = "Primeape δ";
  public fullName: string = "Primeape δ HP 50";
  public text: string = "Primeape δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    return state;
  }
}
