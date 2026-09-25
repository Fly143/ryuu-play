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

export class Ludicolo_342 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lombre";
  public hp: number = 140;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Enthusiastic Dance", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may use this Ability. During this turn, your Basic Pokémon's attacks do 100 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Wave Splash", cost: [], damage: "120", text: "" }
  ];
  public set: string = "CRE";
  public name: string = "Ludicolo";
  public fullName: string = "Ludicolo CRE 34";
  public text: string = "Ludicolo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "plusPowerMarker:100");
    }
    return state;
  }
}
