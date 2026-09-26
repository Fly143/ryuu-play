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

export class Armaldo_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Anorith";
  public hp: number = 150;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Reaping Claw", cost: [], damage: "", text: "If your opponent's Active Pokémon has 100 HP or less remaining, it is Knocked Out." },
      { name: "Boulder Crush", cost: [], damage: "160", text: "" }
  ];
  public set: string = "PGO";
  public name: string = "Armaldo";
  public fullName: string = "Armaldo PGO 96";
  public text: string = "Armaldo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
