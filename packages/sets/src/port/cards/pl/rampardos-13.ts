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

export class Rampardos_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cranidos";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Iron Skull", powerType: PowerType.ABILITY, text: "Rampardos's attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Smash", cost: [], damage: "80", text: "If the Defending Pokémon would be Knocked Out by this attack, Rampardos does 40 damage to itself." },
      { name: "Mold Breaker", cost: [], damage: "40", text: "Any damage done to Rampardos by attacks is reduced by 20 (after applying Weakness and Resistance) until the end of your next turn." }
  ];
  public set: string = "PL";
  public name: string = "Rampardos";
  public fullName: string = "Rampardos PL 13";
  public text: string = "Rampardos";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 20);
    }
    return state;
  }
}
