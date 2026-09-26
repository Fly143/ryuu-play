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

export class Clefairy_59 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gesture", cost: [], damage: "", text: "Choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch." },
      { name: "Moon Kick", cost: [], damage: "20", text: "" }
  ];
  public set: string = "RG";
  public name: string = "Clefairy";
  public fullName: string = "Clefairy RG 59";
  public text: string = "Clefairy";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
