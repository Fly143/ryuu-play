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

export class Volcanion_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dual Turbo", cost: [], damage: "20", text: "Choose up to 2 of your Benched Pokémon and attach a Basic Fire Energy card from your discard pile to each of them." },
      { name: "Heavy Impact", cost: [], damage: "120", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Volcanion";
  public fullName: string = "Volcanion PAR 22";
  public text: string = "Volcanion";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
