import {
  Effect,
  State,
  StoreLike,
  PowerEffect,
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

export class Slaking_34 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vigoroth";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Energetic Impulse", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Slaking is your Active Pokémon, you may flip a coin. If heads, Slaking's Lazy Blow attack's base damage is 130 during this turn. If tails, Slaking can't attack or retreat during this turn. (If Slaking is no longer your Active Pokémon, this effect ends.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lazy Blow", cost: [], damage: "50", text: "" }
  ];
  public set: string = "MT";
  public name: string = "Slaking";
  public fullName: string = "Slaking MT 34";
  public text: string = "Slaking";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
