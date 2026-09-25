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

export class MagmortarDP20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magmar";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Smoke Bomb", cost: [], damage: "30", text: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing." },
      { name: "Flame Drum", cost: [], damage: "80", text: "If Magby isn't anywhere under Magmortar, discard 2 Energy cards from your hand. (If you can't discard 2 Energy cards from your hand, this attack does nothing.)" }
  ];
  public set: string = "PR-DPP";
  public name: string = "Magmortar";
  public fullName: string = "Magmortar PR-DPP DP20";
  public text: string = "Magmortar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackOpponentNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
