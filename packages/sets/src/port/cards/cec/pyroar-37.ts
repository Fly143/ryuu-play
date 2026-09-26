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

export class Pyroar_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Litleo";
  public hp: number = 130;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swirling Inferno", cost: [], damage: "70", text: "Discard all Pokémon Tool cards and Special Energy from each of your opponent's Pokémon." },
      { name: "Heat Blast", cost: [], damage: "140", text: "" }
  ];
  public set: string = "CEC";
  public name: string = "Pyroar";
  public fullName: string = "Pyroar CEC 37";
  public text: string = "Pyroar";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
