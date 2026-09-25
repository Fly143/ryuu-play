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

export class Chansey_101 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bind Wound", cost: [], damage: "", text: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon." },
      { name: "Hammer In", cost: [], damage: "80", text: "" }
  ];
  public set: string = "GRI";
  public name: string = "Chansey";
  public fullName: string = "Chansey GRI 101";
  public text: string = "Chansey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "heal:30");
    }
    return state;
  }
}
