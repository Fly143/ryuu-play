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

export class Gholdengo_99 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gimmighoul";
  public hp: number = 130;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "All-You-Can-Grab", cost: [], damage: "", text: "Flip a coin until you get tails. Search your deck for a number of cards up to the number of heads and put them into your hand. Then, shuffle your deck." },
      { name: "Speed Attack", cost: [], damage: "100", text: "" }
  ];
  public set: string = "MEG";
  public name: string = "Gholdengo";
  public fullName: string = "Gholdengo MEG 99";
  public text: string = "Gholdengo";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
