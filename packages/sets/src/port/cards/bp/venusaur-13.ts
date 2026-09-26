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

export class Venusaur_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ivysaur";
  public hp: number = 100;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Solar Power", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may use this power. Your Active Pokémon and the Defending Pokémon are no longer Asleep, Confused, Paralyzed, or Poisoned. This power can't be used if Venusaur is Asleep, Confused, or Paralyzed.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mega Drain", cost: [], damage: "40", text: "Remove a number of damage counters from Venusaur equal to half the damage done to the Defending Pokémon (after applying Weakness and Resistance) (rounded up to the nearest 10). If Venusaur has fewer damage counters than that, remove all of them." }
  ];
  public set: string = "BP";
  public name: string = "Venusaur";
  public fullName: string = "Venusaur BP 13";
  public text: string = "Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "healHalfDamageDone");
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
