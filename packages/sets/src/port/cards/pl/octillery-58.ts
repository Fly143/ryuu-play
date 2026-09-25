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

export class Octillery_58 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Remoraid";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Water Vein", cost: [], damage: "50×", text: "Reveal the top 5 cards of your deck. Flip a coin for each Energy card you find there. This attack does 50 damage times the number of heads. Shuffle the revealed cards back into your deck." },
      { name: "Octazooka", cost: [], damage: "40", text: "Any time the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack does nothing. (If the Defending Pokémon is no longer your opponent's Active Pokémon, this effect ends.)" }
  ];
  public set: string = "PL";
  public name: string = "Octillery";
  public fullName: string = "Octillery PL 58";
  public text: string = "Octillery";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
