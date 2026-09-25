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

export class MrMimeE4_28 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magic Heal", cost: [], damage: "", text: "Flip 3 coins. Remove a number of damage counters equal to the number of heads from your Pokémon in any way you like." },
      { name: "Barrier Attack", cost: [], damage: "30", text: "During your opponent's next turn, any damage done to Mr. Mime E4 by attacks is reduced by 10 (after applying Weakness and Resistance)." }
  ];
  public set: string = "RR";
  public name: string = "Mr. Mime E4";
  public fullName: string = "Mr. Mime E4 RR 28";
  public text: string = "Mr. Mime E4";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
