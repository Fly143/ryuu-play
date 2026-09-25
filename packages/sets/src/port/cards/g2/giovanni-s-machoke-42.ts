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

export class GiovanniSMachoke_42 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Giovanni's Machop";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Risky Attack", cost: [], damage: "60", text: "Flip a coin. If tails, this attack does no damage to the Defending Pokémon and Giovanni's Machoke does 100 damage to itself." },
      { name: "Headlock", cost: [], damage: "20+", text: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and the Defending Pokémon is now Paralyzed. If tails, this attack does 20 damage." }
  ];
  public set: string = "G2";
  public name: string = "Giovanni's Machoke";
  public fullName: string = "Giovanni's Machoke G2 42";
  public text: string = "Giovanni's Machoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* structural */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
