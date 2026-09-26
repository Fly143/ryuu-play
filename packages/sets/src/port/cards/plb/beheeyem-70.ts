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

export class Beheeyem_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Elgyem";
  public hp: number = 90;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lock Up", cost: [], damage: "20", text: "The Defending Pokémon can't retreat during your opponent's next turn." },
      { name: "Damakinesis", cost: [], damage: "", text: "Move 6 damage counters from any of your Pokémon to the Defending Pokémon." }
  ];
  public set: string = "PLB";
  public name: string = "Beheeyem";
  public fullName: string = "Beheeyem PLB 70";
  public text: string = "Beheeyem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "moveDamageCounters");
    }
    return state;
  }
}
