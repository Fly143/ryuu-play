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

export class Slowbro_433 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Slowpoke";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Strange Behavior", powerType: PowerType.ABILITY, text: "As often as you like during your turn, you may move 1 damage counter from 1 of your other Pokémon to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Bubble Drain", cost: [], damage: "60", text: "Heal 30 damage from this Pokémon." }
  ];
  public set: string = "SVI";
  public name: string = "Slowbro";
  public fullName: string = "Slowbro SVI 43";
  public text: string = "Slowbro";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.healSelfAttack(this, store, state, effect).use(effect, 30);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "moveDamageCounters");
    }
    return state;
  }
}
