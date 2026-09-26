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

export class Venusaur_132 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ivysaur";
  public hp: number = 140;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Green Aroma", powerType: PowerType.ABILITY, text: "Remove all Special Conditions from each of your Grass Pokémon. Each of your Grass Pokémon can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Desperate Pollen", cost: [], damage: "30", text: "If Venusaur already has 8 or more damage counters on it, the Defending Pokémon is now Burned, Confused, and Poisoned." },
      { name: "Special Reaction", cost: [], damage: "40+", text: "If the Defending Pokémon is affected by any Special Conditions, this attack does 40 damage plus 40 more damage for each of those Special Conditions." }
  ];
  public set: string = "SV";
  public name: string = "Venusaur";
  public fullName: string = "Venusaur SV 13";
  public text: string = "Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 40, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "immuneToSpecial");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "immuneToSpecial");
    }
    return state;
  }
}
