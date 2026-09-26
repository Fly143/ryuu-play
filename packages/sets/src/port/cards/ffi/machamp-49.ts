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

export class Machamp_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 150;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Badge of Discipline", powerType: PowerType.ABILITY, text: "The damage of each of your Fighting Pokémon's attacks isn't affected by Resistance.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Close Combat", cost: [], damage: "120", text: "Flip a coin. If tails, during your opponent's next turn, any damage done to this Pokémon by attacks is increased by 30 (after applying Weakness and Resistance)." }
  ];
  public set: string = "FFI";
  public name: string = "Machamp";
  public fullName: string = "Machamp FFI 49";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
