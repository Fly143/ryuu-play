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

export class Porygon_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Calculate", cost: [], damage: "", text: "Look at the top 3 cards of your deck and put them back on top of your deck in any order." },
      { name: "Sharpen", cost: [], damage: "20", text: "" }
  ];
  public set: string = "GE";
  public name: string = "Porygon";
  public fullName: string = "Porygon GE 81";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "pokedex");
    }
    return state;
  }
}
