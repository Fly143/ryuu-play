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

export class Weedle_692 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 40;
    public height?: number = 0.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Speed Evolution", cost: [], damage: "", text: "Search your deck for a card that evolves from Weedle and put it onto Weedle. (This counts as evolving Weedle.) Shuffle your deck afterward." },
      { name: "Sting", cost: [], damage: "10", text: "" }
  ];
  public set: string = "UL";
  public name: string = "Weedle";
  public fullName: string = "Weedle UL 69";
  public text: string = "Weedle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
