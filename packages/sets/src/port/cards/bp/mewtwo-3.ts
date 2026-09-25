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

export class Mewtwo_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Absorption", cost: [], damage: "", text: "Choose up to 2 Energy cards from your discard pile and attach them to Mewtwo." },
      { name: "Psyburn", cost: [], damage: "40", text: "" }
  ];
  public set: string = "BP";
  public name: string = "Mewtwo";
  public fullName: string = "Mewtwo BP 3";
  public text: string = "Mewtwo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverEnergyToSelf:2");
    }
    return state;
  }
}
