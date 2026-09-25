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

export class WobbuffetV_191 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 220;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gritty Comeback", cost: [], damage: "", text: "Switch all damage counters on this Pokémon with those on your opponent's Active Pokémon." },
      { name: "Shadow Bind", cost: [], damage: "70", text: "During your opponent's next turn, the Defending Pokémon can't retreat." }
  ];
  public set: string = "SSH";
  public name: string = "Wobbuffet V";
  public fullName: string = "Wobbuffet V SSH 191";
  public text: string = "Wobbuffet V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* swapDamageCounters */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
