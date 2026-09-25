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

export class Dolliv_222 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Smoliv";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nutrients", cost: [], damage: "", text: "Heal 40 damage from 1 of your Pokémon." },
      { name: "Tackle", cost: [], damage: "40", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Dolliv";
  public fullName: string = "Dolliv DRI 22";
  public text: string = "Dolliv";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "heal:40");
    }
    return state;
  }
}
