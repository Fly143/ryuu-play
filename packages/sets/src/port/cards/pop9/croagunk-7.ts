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

export class Croagunk_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knock Off", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking and discard it." },
      { name: "Nimble", cost: [], damage: "30", text: "If you have Turtwig in play, remove from Croagunk the number of damage counters equal to the damage you did to the Defending Pokémon." }
  ];
  public set: string = "POP9";
  public name: string = "Croagunk";
  public fullName: string = "Croagunk POP9 7";
  public text: string = "Croagunk";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
