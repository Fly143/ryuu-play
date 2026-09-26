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

export class Cubone_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Teary Eyes", cost: [], damage: "", text: "During your opponent's next turn, any damage done to Cubone by attacks is reduced by 20." },
      { name: "Tackle", cost: [], damage: "10", text: "" }
  ];
  public set: string = "AQ";
  public name: string = "Cubone";
  public fullName: string = "Cubone AQ 72";
  public text: string = "Cubone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "reduceDamageMarker:20");
    }
    return state;
  }
}
