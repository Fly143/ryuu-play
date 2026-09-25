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

export class Magnezone_60 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magneton";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Double Type", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in play, it is Lightning and Metal type.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Magnetic Bolt", cost: [], damage: "120", text: "Put a Trainer card from your discard pile into your hand." }
  ];
  public set: string = "CEC";
  public name: string = "Magnezone";
  public fullName: string = "Magnezone CEC 60";
  public text: string = "Magnezone";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "recoverFromDiscard");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "dualType");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "dualType");
    }
    return state;
  }
}
