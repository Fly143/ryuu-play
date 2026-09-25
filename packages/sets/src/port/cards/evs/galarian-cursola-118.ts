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

export class GalarianCursola_118 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Galarian Corsola";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Force Regeneration", cost: [], damage: "", text: "Put a Basic Pokémon V from your opponent's discard pile onto their Bench. If you do, put damage counters on that Pokémon until its remaining HP is 30." },
      { name: "Spooky Shot", cost: [], damage: "80", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Galarian Cursola";
  public fullName: string = "Galarian Cursola EVS 118";
  public text: string = "Galarian Cursola";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
