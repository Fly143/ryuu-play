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

export class Loudred_136 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Whismur";
  public hp: number = 100;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Round", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Pokémon in play that has the Round attack." },
      { name: "Hyper Voice", cost: [], damage: "50", text: "" }
  ];
  public set: string = "VIV";
  public name: string = "Loudred";
  public fullName: string = "Loudred VIV 136";
  public text: string = "Loudred";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
