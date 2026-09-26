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

export class Muk_23 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Grimer";
  public hp: number = 70;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Heavyweight", powerType: PowerType.ABILITY, text: "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Burning Sludge", cost: [], damage: "10", text: "Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned." }
  ];
  public set: string = "AQ";
  public name: string = "Muk";
  public fullName: string = "Muk AQ 23";
  public text: string = "Muk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "auraNoRetreatCost");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "auraNoRetreatCost");
    }
    return state;
  }
}
