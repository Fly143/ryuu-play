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

export class Sceptile_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grovyle";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Green Essence", powerType: PowerType.ABILITY, text: "As long as Sceptile is in play, each of your Active Pokémon that has Grass Energy attached to it can't be affected by any Special Conditions.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Razor Leaf", cost: [], damage: "30", text: "" },
      { name: "Swift", cost: [], damage: "60", text: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon." }
  ];
  public set: string = "EM";
  public name: string = "Sceptile";
  public fullName: string = "Sceptile EM 10";
  public text: string = "Sceptile";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
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
