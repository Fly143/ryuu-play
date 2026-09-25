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

export class Machamp_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Revenge", cost: [], damage: "20+", text: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during his or her last turn, this attack does 20 damage plus 50 more damage." },
      { name: "Dynamic Punch", cost: [], damage: "60+", text: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage and the Defending Pokémon is now Confused." }
  ];
  public set: string = "DP";
  public name: string = "Machamp";
  public fullName: string = "Machamp DP 31";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 30);
    }
    return state;
  }
}
