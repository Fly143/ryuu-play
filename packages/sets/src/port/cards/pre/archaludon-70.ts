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

export class Archaludon_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Duraludon";
  public hp: number = 180;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Metal Bridge", powerType: PowerType.ABILITY, text: "All of your Pokémon that have Metal Energy attached have no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Iron Blaster", cost: [], damage: "160", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PRE";
  public name: string = "Archaludon";
  public fullName: string = "Archaludon PRE 70";
  public text: string = "Archaludon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
