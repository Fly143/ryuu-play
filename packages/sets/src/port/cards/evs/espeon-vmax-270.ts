import {
  Effect,
  State,
  StoreLike,
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

export class EspeonVMAX_270 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Espeon V";
  public hp: number = 310;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Solar Revelation", powerType: PowerType.ABILITY, text: "Prevent all effects of attacks from your opponent's Pokémon done to all of your Pokémon that have Energy attached.(Existing effects are not removed. Damage is not an effect.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Mindstorm", cost: [], damage: "60×", text: "This attack does 60 damage for each Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "EVS";
  public name: string = "Espeon VMAX";
  public fullName: string = "Espeon VMAX EVS 270";
  public text: string = "Espeon VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.preventEffectsSelfPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "preventEffectsSelf");
    }
    return state;
  }
}
