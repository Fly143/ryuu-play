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

export class Porygon_71 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Conversion 3", cost: [], damage: "", text: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, Fairy, or Dragon type. The Defending Pokémon's Weakness is now that type until the end of your next turn. (The amount of Weakness doesn't change.)" }
  ];
  public set: string = "EVO";
  public name: string = "Porygon";
  public fullName: string = "Porygon EVO 71";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
