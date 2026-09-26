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

export class Venusaur_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Ivysaur";
  public hp: number = 180;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Loopy Lasso", powerType: PowerType.ABILITY, text: "Once during your turn, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with their Active Pokémon, and the new Active Pokémon is now Asleep and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Solar Beam", cost: [], damage: "130", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Venusaur";
  public fullName: string = "Venusaur PGO 3";
  public text: string = "Venusaur";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
