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

export class Pikachu_702 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pika Punch", cost: [], damage: "20", text: "" },
      { name: "Speed Bolt", cost: [], damage: "40", text: "If Pikachu evolved from Pichu during this turn, prevent all effects of an attack, including damage, done to Pikachu during your opponent's next turn." }
  ];
  public set: string = "PL";
  public name: string = "Pikachu";
  public fullName: string = "Pikachu PL 70";
  public text: string = "Pikachu";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    return state;
  }
}
