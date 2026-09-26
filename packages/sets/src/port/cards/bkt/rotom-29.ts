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

export class Rotom_29 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electro Ball", cost: [], damage: "20", text: "" },
      { name: "Electric Mischief", cost: [], damage: "", text: "Flip 3 coins. For each heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck." }
  ];
  public set: string = "BKT";
  public name: string = "Rotom";
  public fullName: string = "Rotom BKT 29";
  public text: string = "Rotom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
