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

export class Primeape_67 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Mankey";
  public hp: number = 120;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Field Crush", cost: [], damage: "20", text: "If your opponent has a Stadium in play, discard it." },
      { name: "Steamin' Mad Strike", cost: [], damage: "50×", text: "This attack does 50 damage for each of your Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "SHF";
  public name: string = "Primeape";
  public fullName: string = "Primeape SHF 67";
  public text: string = "Primeape";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
