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

export class Tangrowth_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tangela";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Green Renewal", powerType: PowerType.ABILITY, text: "Remove 1 damage counter from Tangrowth between turns.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Green Acid", cost: [], damage: "20", text: "Flip 2 coins. If the first coin is heads, the Defending Pokémon is now Confused. If the second coin is heads, the Defending Pokémon is now Poisoned." },
      { name: "Reaching Vine", cost: [], damage: "60", text: "Does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "PL";
  public name: string = "Tangrowth";
  public fullName: string = "Tangrowth PL 29";
  public text: string = "Tangrowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
