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

export class Dondozo_55 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Supplemental Swallow-Up", cost: [], damage: "", text: "Look at the top 5 cards of your deck. You may attach any number of Basic Energy cards you find there to this Pokémon. Shuffle the other cards back into your deck." },
      { name: "Hydro Splash", cost: [], damage: "180", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Dondozo";
  public fullName: string = "Dondozo PAR 55";
  public text: string = "Dondozo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
