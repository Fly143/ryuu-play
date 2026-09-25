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

export class Deoxys_74 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psypunch", cost: [], damage: "30", text: "" },
      { name: "Genome Spiral", cost: [], damage: "120", text: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like." }
  ];
  public set: string = "PAR";
  public name: string = "Deoxys";
  public fullName: string = "Deoxys PAR 74";
  public text: string = "Deoxys";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
