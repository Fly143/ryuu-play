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

export class Raticate_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 60;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crunch", cost: [], damage: "10", text: "Discard an Energy attached to your opponent's Active Pokémon." },
      { name: "Shadowy Bite", cost: [], damage: "60×", text: "This attack does 60 damage times the number of Special Energy cards in your opponent's discard pile." }
  ];
  public set: string = "EVO";
  public name: string = "Raticate";
  public fullName: string = "Raticate EVO 67";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
