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

export class Charcadet_19 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gather Strength", cost: [], damage: "", text: "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Chop", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PFL";
  public name: string = "Charcadet";
  public fullName: string = "Charcadet PFL 19";
  public text: string = "Charcadet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:2");
    }
    return state;
  }
}
