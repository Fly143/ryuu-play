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

export class Blacephalon_104 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fireworks Bomb", cost: [], damage: "", text: "Put 4 damage counters on your opponent's Pokémon in any way you like. If your opponent has exactly 3 Prize cards remaining, put 12 damage counters on them instead." }
  ];
  public set: string = "CEC";
  public name: string = "Blacephalon";
  public fullName: string = "Blacephalon CEC 104";
  public text: string = "Blacephalon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putCountersDefending(this, store, state, effect).use(effect, 40);
    }
    return state;
  }
}
