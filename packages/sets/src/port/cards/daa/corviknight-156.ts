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

export class Corviknight_156 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Corvisquire";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Flying Taxi", powerType: PowerType.ABILITY, text: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 1 of your Pokémon, except any Corviknight, and all attached cards into your hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Blasting Wind", cost: [], damage: "120", text: "" }
  ];
  public set: string = "DAA";
  public name: string = "Corviknight";
  public fullName: string = "Corviknight DAA 156";
  public text: string = "Corviknight";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
