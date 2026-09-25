import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class Entei_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "θ Double", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tool cards attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Flame Screen", cost: [], damage: "30", text: "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance)." },
      { name: "Heat Tackle", cost: [], damage: "130", text: "Flip a coin. If tails, this Pokémon does 30 damage to itself." }
  ];
  public set: string = "BKT";
  public name: string = "Entei";
  public fullName: string = "Entei BKT 15";
  public text: string = "Entei";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfReduceDamageNextTurn(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipTailsSelfDamage(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
