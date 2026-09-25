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

export class Jolteon_70 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Speed Cheer", powerType: PowerType.ABILITY, text: "The attacks of your Pokémon-GX in play that evolve from Eevee cost Colorless less. You can't apply more than 1 Speed Cheer Ability at a time.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Head Bolt", cost: [], damage: "70", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Jolteon";
  public fullName: string = "Jolteon CEC 70";
  public text: string = "Jolteon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
