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

export class Latios_9 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Delta Aura", powerType: PowerType.ABILITY, text: "If you have Latias or Latias ex in play, the attack cost of Latios's Psychic Force is now Lightning MetalColorless.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragon Claw", cost: [], damage: "20", text: "" },
      { name: "Psychic Force", cost: [], damage: "80", text: "If your opponent has no Stage 2 Evolved Pokémon in play, this attack does nothing." }
  ];
  public set: string = "DS";
  public name: string = "Latios δ";
  public fullName: string = "Latios δ DS 9";
  public text: string = "Latios δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
