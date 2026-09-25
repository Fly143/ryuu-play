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

export class Grafaiai_121 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shroodle";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Mischievous Painting", cost: [], damage: "", text: "Attach up to 3 Energy cards from your opponent's discard pile to their Pokémon in any way you like." },
      { name: "Energized Graffiti", cost: [], damage: "40×", text: "This attack does 40 damage for each Energy attached to all of your opponent's Pokémon." }
  ];
  public set: string = "SSP";
  public name: string = "Grafaiai";
  public fullName: string = "Grafaiai SSP 121";
  public text: string = "Grafaiai";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
