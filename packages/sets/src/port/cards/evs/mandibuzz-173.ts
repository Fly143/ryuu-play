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

export class Mandibuzz_173 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Vullaby";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bone Block", cost: [], damage: "20", text: "During your opponent's next turn, Pokémon can't be played from your opponent's hand to evolve the Defending Pokémon." },
      { name: "Dark Cutter", cost: [], damage: "70", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Mandibuzz";
  public fullName: string = "Mandibuzz EVS 173";
  public text: string = "Mandibuzz";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
