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

export class Spiritomb_892 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fettered in Misfortune", powerType: PowerType.ABILITY, text: "Basic Pokémon V in play (both yours and your opponent's) have no Abilities.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Fade Out", cost: [], damage: "10", text: "Put this Pokémon and all attached cards into your hand." }
  ];
  public set: string = "PAL";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb PAL 89";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noPowers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noPowers");
    }
    return state;
  }
}
