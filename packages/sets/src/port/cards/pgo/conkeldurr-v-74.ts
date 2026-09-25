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

export class ConkeldurrV_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Counter", cost: [], damage: "20+", text: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage." },
      { name: "Dynamic Punch", cost: [], damage: "90+", text: "Flip a coin. If heads, this attack does 90 more damage, and your opponent's Active Pokémon is now Confused." }
  ];
  public set: string = "PGO";
  public name: string = "Conkeldurr V";
  public fullName: string = "Conkeldurr V PGO 74";
  public text: string = "Conkeldurr V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 90, 1);
    }
    return state;
  }
}
