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

export class Ambipom_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Aipom";
  public hp: number = 80;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Tail Influence", cost: [], damage: "30", text: "Your opponent flips a coin until he or she gets heads. For each tails, remove an Energy card attached to the Defending Pokémon and put it on the bottom of your opponent's deck." },
      { name: "Charity Tail", cost: [], damage: "80", text: "Before Ambipom does damage, your opponent may discard 2 cards from his or her hand. If he or she does, this attack's base damage is 10 instead of 80." }
  ];
  public set: string = "MT";
  public name: string = "Ambipom";
  public fullName: string = "Ambipom MT 3";
  public text: string = "Ambipom";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
