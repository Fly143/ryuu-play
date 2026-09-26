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

export class MunkidoriEx_83 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Oh No You Don't", powerType: PowerType.ABILITY, text: "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon, and if you have any Pecharunt ex in play, your opponent takes 1 fewer Prize card.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dirty Headbutt", cost: [], damage: "190", text: "During your next turn, this Pokémon can't use Dirty Headbutt." }
  ];
  public set: string = "SFA";
  public name: string = "Munkidori ex";
  public fullName: string = "Munkidori ex SFA 83";
  public text: string = "Munkidori ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "minusPrize:1");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "minusPrize:1");
    }
    return state;
  }
}
