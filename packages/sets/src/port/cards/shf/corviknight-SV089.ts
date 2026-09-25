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

export class CorviknightSV089 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corvisquire";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Peck", cost: [], damage: "50", text: "" },
      { name: "Iron Wings", cost: [], damage: "130", text: "You may discard 2 Energy from this Pokémon. If you do, during your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance)." }
  ];
  public set: string = "SHF";
  public name: string = "Corviknight";
  public fullName: string = "Corviknight SHF SV089";
  public text: string = "Corviknight";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.reduceDamageNextTurn(this, store, state, effect).use(effect, 100);
    }
    return state;
  }
}
