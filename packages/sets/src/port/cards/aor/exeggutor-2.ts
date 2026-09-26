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

export class Exeggutor_25 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Exeggcute";
  public hp: number = 120;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shake It Off", cost: [], damage: "20×", text: "This attack does 20 damage times the number of Colorless Pokémon your opponent has in play." },
      { name: "Seed Bomb", cost: [], damage: "80", text: "" }
  ];
  public set: string = "AOR";
  public name: string = "Exeggutor";
  public fullName: string = "Exeggutor AOR 2";
  public text: string = "Exeggutor";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
