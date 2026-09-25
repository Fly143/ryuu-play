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

export class Girafarig_65 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psypower", cost: [], damage: "", text: "Put 2 damage counters on your opponent's Pokémon in any way you like." },
      { name: "Commanding Tail", cost: [], damage: "30", text: "You may have your opponent shuffle their hand into their deck. If you do, your opponent draws 4 cards." }
  ];
  public set: string = "VIV";
  public name: string = "Girafarig";
  public fullName: string = "Girafarig VIV 65";
  public text: string = "Girafarig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
