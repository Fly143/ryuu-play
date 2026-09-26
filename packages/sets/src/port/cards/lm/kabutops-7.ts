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

export class Kabutops_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kabuto";
  public hp: number = 110;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Ancient Shell", powerType: PowerType.ABILITY, text: "As long as you have Omanyte or Omastar in play, damage done to Kabutops by attacks is reduced by 20 (after applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Stream", cost: [], damage: "30", text: "Search your discard pile for a basic Energy card and attach it to Kabutops." },
      { name: "Extra Claws", cost: [], damage: "50+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage." }
  ];
  public set: string = "LM";
  public name: string = "Kabutops";
  public fullName: string = "Kabutops LM 7";
  public text: string = "Kabutops";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "reduceDamageSelf:20");
    }
    return state;
  }
}
