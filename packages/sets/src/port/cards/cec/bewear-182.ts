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

export class Bewear_182 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Stufful";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Carry and Run", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, your Active Pokémon's Retreat Cost is ColorlessColorless less.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lariat", cost: [], damage: "120", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "CEC";
  public name: string = "Bewear";
  public fullName: string = "Bewear CEC 182";
  public text: string = "Bewear";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
