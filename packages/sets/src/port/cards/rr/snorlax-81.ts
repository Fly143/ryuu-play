import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Snorlax_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bad Sleeping Habits", powerType: PowerType.ABILITY, text: "As long as Snorlax is Asleep, your opponent's Active Pokémon can't retreat.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Toss and Turn", cost: [], damage: "20+", text: "If Snorlax is Asleep, this attack does 20 damage plus 30 more damage. (This attack can be used even if Snorlax is Asleep.)" },
      { name: "Heavy Press", cost: [], damage: "40+", text: "Flip a coin. If heads, this attack does 40 damage plus 40 more damage. If tails, Snorlax is now Asleep." }
  ];
  public set: string = "RR";
  public name: string = "Snorlax";
  public fullName: string = "Snorlax RR 81";
  public text: string = "Snorlax";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.flipHeadsBonusDamage(this, store, state, effect).use(effect, 40);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraCantRetreatOpponent");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraCantRetreatOpponent");
    }
    return state;
  }
}
