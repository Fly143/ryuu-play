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

export class Excadrill_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drilbur";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ω Barrage", powerType: PowerType.ABILITY, text: "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dredge", cost: [], damage: "", text: "Search your deck for 2 Energy cards and attach them to this Pokémon. Shuffle your deck afterward." },
      { name: "Mach Claw", cost: [], damage: "50", text: "This attack's damage isn't affected by Resistance." }
  ];
  public set: string = "ROS";
  public name: string = "Excadrill";
  public fullName: string = "Excadrill ROS 97";
  public text: string = "Excadrill";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "attackTwice");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "attackTwice");
    }
    return state;
  }
}
