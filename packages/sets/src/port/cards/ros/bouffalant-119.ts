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

export class Bouffalant_1192 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sap Sipper", powerType: PowerType.ABILITY, text: "This Pokémon's attacks do 40 more damage to your opponent's Grass Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Derail", cost: [], damage: "80", text: "Discard a Special Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "ROS";
  public name: string = "Bouffalant";
  public fullName: string = "Bouffalant ROS 119";
  public text: string = "Bouffalant";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* plusPowerMarker:40 */ state;
    }
    return state;
  }
}
