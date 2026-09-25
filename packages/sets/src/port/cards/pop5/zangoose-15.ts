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

export class Zangoose_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Detect", cost: [], damage: "", text: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Zangoose during your opponent's next turn." },
      { name: "Metal Claw", cost: [], damage: "40", text: "" }
  ];
  public set: string = "POP5";
  public name: string = "Zangoose δ";
  public fullName: string = "Zangoose δ POP5 15";
  public text: string = "Zangoose δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
