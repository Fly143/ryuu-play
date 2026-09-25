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

export class Maractus_122 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Peck", cost: [], damage: "20", text: "" },
      { name: "Ditch and Shake", cost: [], damage: "50×", text: "Discard any number of Pokémon Tool cards from your hand. This attack does 50 damage for each card you discarded in this way." }
  ];
  public set: string = "EVS";
  public name: string = "Maractus";
  public fullName: string = "Maractus EVS 12";
  public text: string = "Maractus";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
