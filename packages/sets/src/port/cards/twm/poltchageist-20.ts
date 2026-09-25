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

export class Poltchageist_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Storehouse Hideaway", powerType: PowerType.ABILITY, text: "As long as this Pokémon is on your Bench, prevent all damage from and effects of attacks from your opponent's Pokémon done to this Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Hook", cost: [], damage: "10", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Poltchageist";
  public fullName: string = "Poltchageist TWM 20";
  public text: string = "Poltchageist";

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
