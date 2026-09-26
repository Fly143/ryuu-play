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

export class Sableye_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pull Out", cost: [], damage: "", text: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck." },
      { name: "Dark Hand", cost: [], damage: "20+", text: "If you have more cards in your hand than your opponent, this attack does 20 damage plus 30 more damage." }
  ];
  public set: string = "UD";
  public name: string = "Sableye";
  public fullName: string = "Sableye UD 35";
  public text: string = "Sableye";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
