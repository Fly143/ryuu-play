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

export class Banette_14 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shuppet";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Lost Crush", cost: [], damage: "", text: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and put it in the Lost Zone." },
      { name: "Breakdown", cost: [], damage: "", text: "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon." }
  ];
  public set: string = "TM";
  public name: string = "Banette";
  public fullName: string = "Banette TM 14";
  public text: string = "Banette";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
