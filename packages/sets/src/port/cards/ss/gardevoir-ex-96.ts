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

export class GardevoirEx_96 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Kirlia";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Feedback", cost: [], damage: "", text: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon." },
      { name: "Psystorm", cost: [], damage: "10×", text: "Does 10 damage times the total amount of Energy attached to all Pokémon in play." }
  ];
  public set: string = "SS";
  public name: string = "Gardevoir ex";
  public fullName: string = "Gardevoir ex SS 96";
  public text: string = "Gardevoir ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
