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

export class Arboliva_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dolliv";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Healing Fruit", cost: [], damage: "", text: "Heal all damage from 1 of your Benched Pokémon." },
      { name: "Oil Shot", cost: [], damage: "90", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Arboliva";
  public fullName: string = "Arboliva OBF 21";
  public text: string = "Arboliva";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healBench:999");
    }
    return state;
  }
}
