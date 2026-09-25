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

export class Volbeat_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Luring Glow", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot." },
      { name: "Bug Buzz", cost: [], damage: "90", text: "" }
  ];
  public set: string = "30C";
  public name: string = "Volbeat";
  public fullName: string = "Volbeat 30C 3";
  public text: string = "Volbeat";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
