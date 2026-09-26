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

export class Corsola_32 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Coral Glow", cost: [], damage: "", text: "Draw a number of cards up to the number of your opponent's Basic Pokémon in play. (You can't have more than 10 cards in your hand in this way.)" },
      { name: "Surf", cost: [], damage: "40", text: "" }
  ];
  public set: string = "HL";
  public name: string = "Corsola";
  public fullName: string = "Corsola HL 32";
  public text: string = "Corsola";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
