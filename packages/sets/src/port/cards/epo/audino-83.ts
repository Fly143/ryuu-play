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

export class Audino_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Powerful Slap", cost: [], damage: "40×", text: "Flip a coin for each Energy attached to this Pokémon. This attack does 40 damage times the number of heads." },
      { name: "Heal Pulse", cost: [], damage: "", text: "Heal 50 damage from 1 of your Pokémon." }
  ];
  public set: string = "EPO";
  public name: string = "Audino";
  public fullName: string = "Audino EPO 83";
  public text: string = "Audino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "heal:50");
    }
    return state;
  }
}
