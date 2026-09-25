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

export class MGardevoirEX_106 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gardevoir-EX";
  public hp: number = 210;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Brilliant Arrow", cost: [], damage: "30×", text: "This attack does 30 damage times the number of Fairy Energy attached to all of your Pokémon." }
  ];
  public set: string = "30C";
  public name: string = "M Gardevoir-EX";
  public fullName: string = "M Gardevoir-EX 30C 106";
  public text: string = "M Gardevoir-EX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
