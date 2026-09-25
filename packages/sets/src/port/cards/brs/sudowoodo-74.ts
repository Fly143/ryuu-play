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

export class Sudowoodo_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Vamoose", powerType: PowerType.ABILITY, text: "If this Pokémon has any damage counters on it, it has no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Double-Edge", cost: [], damage: "90", text: "This Pokémon also does 30 damage to itself." }
  ];
  public set: string = "BRS";
  public name: string = "Sudowoodo";
  public fullName: string = "Sudowoodo BRS 74";
  public text: string = "Sudowoodo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.selfDamage(this, store, state, effect).use(effect, 30);
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
