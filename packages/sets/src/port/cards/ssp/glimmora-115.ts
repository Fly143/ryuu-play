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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Glimmora_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Glimmet";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Corrosive Shards", cost: [], damage: "20", text: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, Energy cards can't be attached from your opponent's hand to that Pokémon." },
      { name: "Rock Throw", cost: [], damage: "60", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Glimmora";
  public fullName: string = "Glimmora SSP 115";
  public text: string = "Glimmora";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.POISONED);
    }
    return state;
  }
}
