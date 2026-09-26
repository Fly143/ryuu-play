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

export class Klefki_128 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Stick 'n' Draw", cost: [], damage: "", text: "Discard a card from your hand. If you do, draw 2 cards." },
      { name: "Hook", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Klefki";
  public fullName: string = "Klefki SSP 128";
  public text: string = "Klefki";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
