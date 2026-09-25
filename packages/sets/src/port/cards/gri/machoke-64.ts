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

export class Machoke_64 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machop";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Daunting Pose", powerType: PowerType.ABILITY, text: "Prevent all damage done to your Benched Pokémon by your opponent's attacks. Your opponent's attacks and Abilities can't put damage counters on your Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Cross Chop", cost: [], damage: "30+", text: "Flip a coin. If heads, this attack does 30 more damage." }
  ];
  public set: string = "GRI";
  public name: string = "Machoke";
  public fullName: string = "Machoke GRI 64";
  public text: string = "Machoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 1);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
