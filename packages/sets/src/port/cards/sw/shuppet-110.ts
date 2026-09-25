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

export class Shuppet_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gossip", cost: [], damage: "", text: "Put 1 damage counter on 1 of your opponent's Pokémon." },
      { name: "Hang Down", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SW";
  public name: string = "Shuppet";
  public fullName: string = "Shuppet SW 110";
  public text: string = "Shuppet";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.putDamageCountersDefending(this, store, state, effect).use(effect, 10);
    }
    return state;
  }
}
