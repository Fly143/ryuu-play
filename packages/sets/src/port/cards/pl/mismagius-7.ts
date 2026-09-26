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

export class Mismagius_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Misdreavus";
  public hp: number = 80;
    public height?: number = 0.9;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Crash Chant", cost: [], damage: "20×", text: "Choose up to 4 in any combination of Pokémon Tool cards and Technical Machine cards in play (both yours and your opponent's) and discard them. This attack does 20 damage times the number of cards discarded in this way." },
      { name: "Horror Chant", cost: [], damage: "40", text: "If your opponent has 4 or more Benched Pokémon, choose 1 of them and return that Pokémon and all cards attached to it to your opponent's hand." }
  ];
  public set: string = "PL";
  public name: string = "Mismagius";
  public fullName: string = "Mismagius PL 7";
  public text: string = "Mismagius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
