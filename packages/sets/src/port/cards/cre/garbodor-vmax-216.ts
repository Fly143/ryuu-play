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

export class GarbodorVMAX_216 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Garbodor V";
  public hp: number = 330;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rubbish Collecting", powerType: PowerType.ABILITY, text: "This Pokémon may have up to 2 Pokémon Tools attached to it. If it loses this Ability, discard Pokémon Tools from it until only 1 remains.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "G-Max Malodor", cost: [], damage: "120", text: "Your opponent's Active Pokémon is now Poisoned. During your opponent's next turn, that Pokémon can't retreat." }
  ];
  public set: string = "CRE";
  public name: string = "Garbodor VMAX";
  public fullName: string = "Garbodor VMAX CRE 216";
  public text: string = "Garbodor VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "toolSlots:2");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "toolSlots:2");
    }
    return state;
  }
}
