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

export class Stoutland_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Herdier";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ferocious Bellow", cost: [], damage: "50", text: "During your opponent's next turn, the Defending Pokémon's attacks do 50 less damage (before applying Weakness and Resistance)." },
      { name: "Hammer In", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SUM";
  public name: string = "Stoutland";
  public fullName: string = "Stoutland SUM 105";
  public text: string = "Stoutland";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
