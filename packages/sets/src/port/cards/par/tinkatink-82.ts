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

export class Tinkatink_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mountain Scrounging", cost: [], damage: "", text: "Look at the top card of your deck. You may put that card into your hand. If you don't, discard that card and draw a card." },
      { name: "Mumble", cost: [], damage: "10", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Tinkatink";
  public fullName: string = "Tinkatink PAR 82";
  public text: string = "Tinkatink";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
