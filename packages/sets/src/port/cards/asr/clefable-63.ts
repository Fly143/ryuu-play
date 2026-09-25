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

export class Clefable_63 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Spirit Charm", powerType: PowerType.ABILITY, text: "All of your Pokémon take 30 less damage from attacks from your opponent's Dragon Pokémon (after applying Weakness and Resistance). You can't apply more than 1 Spirit Charm Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Moon Impact", cost: [], damage: "90", text: "" }
  ];
  public set: string = "ASR";
  public name: string = "Clefable";
  public fullName: string = "Clefable ASR 63";
  public text: string = "Clefable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.reduceDamageSelfPower(this, store, state, effect).reduce(effect.power, 30);
    }
    return state;
  }
}
