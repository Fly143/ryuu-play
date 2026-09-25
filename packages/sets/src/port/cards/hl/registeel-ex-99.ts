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

export class RegisteelEx_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Exoskeleton", powerType: PowerType.ABILITY, text: "Any damage done to Registeel ex by attacks is reduced by 10 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Steel Wave", cost: [], damage: "50", text: "Does 20 damage to each of your opponent's Benched Pokémon of the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)" }
  ];
  public set: string = "HL";
  public name: string = "Registeel ex";
  public fullName: string = "Registeel ex HL 99";
  public text: string = "Registeel ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.damageAllBench(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 10);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:10");
    }
    return state;
  }
}
