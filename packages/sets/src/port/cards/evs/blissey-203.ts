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

export class Blissey_203 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Chansey";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Expert in Roundness", powerType: PowerType.ABILITY, text: "Prevent all damage done to each of your Pokémon that has the Let's All Rollout attack by attacks from your opponent's Pokémon VMAX.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Let's All Rollout", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack." }
  ];
  public set: string = "EVS";
  public name: string = "Blissey";
  public fullName: string = "Blissey EVS 203";
  public text: string = "Blissey";

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
