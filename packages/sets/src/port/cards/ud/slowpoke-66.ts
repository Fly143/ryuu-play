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

export class Slowpoke_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rambunctious Party", cost: [], damage: "", text: "Look at the top 5 cards of your deck. Choose as many Basic Pokémon as you like and put them onto your Bench. Shuffle the other cards back into your deck." },
      { name: "Rain Splash", cost: [], damage: "20", text: "" }
  ];
  public set: string = "UD";
  public name: string = "Slowpoke";
  public fullName: string = "Slowpoke UD 66";
  public text: string = "Slowpoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
