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

export class Floatzel_49 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Buizel";
  public hp: number = 110;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Swirling Tail", cost: [], damage: "", text: "Flip a coin. If heads, put your opponent's Active Pokémon and all attached cards into your opponent's hand." },
      { name: "Waterfall", cost: [], damage: "60", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Floatzel";
  public fullName: string = "Floatzel OBF 49";
  public text: string = "Floatzel";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
