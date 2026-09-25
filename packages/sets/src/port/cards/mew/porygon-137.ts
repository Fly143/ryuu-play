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

export class Porygon_137 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Conversion 4", cost: [], damage: "", text: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Dragon type. Until the Defending Pokémon leaves the Active Spot, its Weakness is now that type. (The amount of Weakness doesn't change.)" }
  ];
  public set: string = "MEW";
  public name: string = "Porygon";
  public fullName: string = "Porygon MEW 137";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
