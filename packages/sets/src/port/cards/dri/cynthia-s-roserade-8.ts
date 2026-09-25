import {
  Effect,
  State,
  StoreLike,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class CynthiaSRoserade_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cynthia's Roselia";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Cheer On to Glory", powerType: PowerType.ABILITY, text: "Attacks used by your Cynthia's Pokémon do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Leaf Step", cost: [], damage: "80", text: "" }
  ];
  public set: string = "DRI";
  public name: string = "Cynthia's Roserade";
  public fullName: string = "Cynthia's Roserade DRI 8";
  public text: string = "Cynthia's Roserade";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
