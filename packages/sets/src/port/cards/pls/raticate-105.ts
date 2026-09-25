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

export class Raticate_105 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rattata";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Gnaw Through", cost: [], damage: "", text: "Discard a Pokémon Tool card attached to the Defending Pokémon." },
      { name: "Super Fang", cost: [], damage: "", text: "Put damage counters on the Defending Pokémon until its remaining HP is 10." }
  ];
  public set: string = "PLS";
  public name: string = "Raticate";
  public fullName: string = "Raticate PLS 105";
  public text: string = "Raticate";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
