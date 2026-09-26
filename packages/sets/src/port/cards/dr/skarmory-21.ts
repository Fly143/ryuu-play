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

export class Skarmory_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pick On", cost: [], damage: "", text: "If the number of cards in your opponent's hand is at least 6, look at his or her hand. Choose a number of cards there until your opponent has 5 cards left in his or her hand and have your opponent shuffle the cards you chose into his or her deck." },
      { name: "Power Count", cost: [], damage: "20+", text: "Count the amount of Energy attached to all of your Pokémon and all of your opponent's Pokémon. If your Pokémon have less Energy than your opponent's, this attack does 20 damage plus 30 more damage." }
  ];
  public set: string = "DR";
  public name: string = "Skarmory";
  public fullName: string = "Skarmory DR 21";
  public text: string = "Skarmory";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
