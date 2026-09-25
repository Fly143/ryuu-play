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

export class Delcatty_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Skitty";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Attracting Body", powerType: PowerType.ABILITY, text: "If Delcatty is your Active Pokémon and is damaged by an opponent's attack (even if Delcatty is Knocked Out), flip a coin. If heads, the Attacking Pokémon is now Confused.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Assist", cost: [], damage: "30", text: "Search your discard pile for a basic Energy card and attach it to 1 of your Benched Pokémon." }
  ];
  public set: string = "SF";
  public name: string = "Delcatty";
  public fullName: string = "Delcatty SF 23";
  public text: string = "Delcatty";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.roughSkinPower(this, store, state, effect).reduce(effect.power);
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "roughSkin");
    }
    return state;
  }
}
