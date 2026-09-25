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

export class Dachsbun_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Fidough";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Well-Baked Body", powerType: PowerType.ABILITY, text: "This Pokémon can't be Burned. Prevent all damage done to this Pokémon by attacks from your opponent's Fire Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Headbutt Bounce", cost: [], damage: "100", text: "" }
  ];
  public set: string = "PAF";
  public name: string = "Dachsbun";
  public fullName: string = "Dachsbun PAF 39";
  public text: string = "Dachsbun";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraPreventEffects");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraPreventEffects");
    }
    return state;
  }
}
