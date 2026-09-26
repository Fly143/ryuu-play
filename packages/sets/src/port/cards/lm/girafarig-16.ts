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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Girafarig_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Rear Sensor", powerType: PowerType.ABILITY, text: "Each player's Active Basic Pokémon (excluding Pokémon-ex) can't use any Poké-Powers.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Foresight", cost: [], damage: "", text: "Look at the top 5 cards on either player's deck and put them back on top of that player's deck in any order you like." },
      { name: "Disorder", cost: [], damage: "20", text: "If the Defending Pokémon has any Special Energy cards attached to it, the Defending Pokémon is now Confused." }
  ];
  public set: string = "LM";
  public name: string = "Girafarig";
  public fullName: string = "Girafarig LM 16";
  public text: string = "Girafarig";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
