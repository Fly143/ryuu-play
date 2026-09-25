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

export class Omanyte_41 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mysterious Fossil";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water of Evolution", cost: [], damage: "", text: "Put an Omastar from your hand onto Omanyte. This counts as evolving Omanyte." },
      { name: "Drag Off", cost: [], damage: "20", text: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon." }
  ];
  public set: string = "SK";
  public name: string = "Omanyte";
  public fullName: string = "Omanyte SK 41";
  public text: string = "Omanyte";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
