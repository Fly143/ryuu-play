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

export class Wishiwashi_31 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Meet Up", powerType: PowerType.ABILITY, text: "Your Wishiwashi-GX in play get +20 HP, and their attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Water Gun", cost: [], damage: "20", text: "" }
  ];
  public set: string = "DRM";
  public name: string = "Wishiwashi";
  public fullName: string = "Wishiwashi DRM 31";
  public text: string = "Wishiwashi";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:20");
    }
    return state;
  }
}
