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

export class LaprasHGSS14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 90;
    public height?: number = 2.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Ferry", cost: [], damage: "", text: "Search your discard pile for a Supporter card, show it to your opponent, and put it into your hand." },
      { name: "Surf", cost: [], damage: "40", text: "" }
  ];
  public set: string = "PR-HS";
  public name: string = "Lapras";
  public fullName: string = "Lapras PR-HS HGSS14";
  public text: string = "Lapras";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
