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

export class CornerstoneMaskOgerponEx_199 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 210;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cornerstone Stance", powerType: PowerType.ABILITY, text: "Prevent all damage from attacks done to this Pokémon by your opponent's Pokémon that have an Ability.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Demolish", cost: [], damage: "140", text: "This attack's damage isn't affected by Weakness or Resistance, or by any effects on your opponent's Active Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Cornerstone Mask Ogerpon ex";
  public fullName: string = "Cornerstone Mask Ogerpon ex TWM 199";
  public text: string = "Cornerstone Mask Ogerpon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.ignoreWeaknessResistance(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
