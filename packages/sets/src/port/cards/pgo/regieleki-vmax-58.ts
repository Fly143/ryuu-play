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

export class RegielekiVMAX_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Regieleki V";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Transistor", powerType: PowerType.ABILITY, text: "Your Basic Lightning Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Thunder and Lightning", cost: [], damage: "220", text: "During your next turn, this Pokémon can't attack." }
  ];
  public set: string = "PGO";
  public name: string = "Regieleki VMAX";
  public fullName: string = "Regieleki VMAX PGO 58";
  public text: string = "Regieleki VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantAttackNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:30");
    }
    return state;
  }
}
