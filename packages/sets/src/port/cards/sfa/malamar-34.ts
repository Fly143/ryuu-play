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

export class Malamar_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Inkay";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Colluding Tentacles", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. If you do, this attack does 120 damage to the new Active Pokémon. If you didn't play Xerosic's Machinations from your hand during this turn, this attack does nothing." },
      { name: "Spinning Attack", cost: [], damage: "90", text: "" }
  ];
  public set: string = "SFA";
  public name: string = "Malamar";
  public fullName: string = "Malamar SFA 34";
  public text: string = "Malamar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "attackGate");
    }
    return state;
  }
}
