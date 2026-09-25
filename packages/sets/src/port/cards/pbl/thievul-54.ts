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

export class Thievul_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Nickit";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Skill Thief", cost: [], damage: "", text: "If you have no cards in your hand, choose an attack from 1 of your opponent's Pokémon in play and use it as this attack." },
      { name: "Sharp Fang", cost: [], damage: "80", text: "" }
  ];
  public set: string = "PBL";
  public name: string = "Thievul";
  public fullName: string = "Thievul PBL 54";
  public text: string = "Thievul";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "copyAttack");
    }
    return state;
  }
}
