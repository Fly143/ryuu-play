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

export class Dodrio_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doduo";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Retreat Aid", powerType: PowerType.ABILITY, text: "As long as Dodrio is on your Bench, you pay ColorlessColorless less to retreat your Active Pokémon (excluding Pokémon-ex and Baby Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Tri Attack", cost: [], damage: "20×", text: "Flip 3 coins. This attack does 20 damage times the number of heads." }
  ];
  public set: string = "RG";
  public name: string = "Dodrio";
  public fullName: string = "Dodrio RG 21";
  public text: string = "Dodrio";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.flipTimesDamage(this, store, state, effect).use(effect, 3, 20);
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
