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

export class Electrike_81 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Electromagnetic Jam", cost: [], damage: "10", text: "Flip a coin. If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn." }
  ];
  public set: string = "MT";
  public name: string = "Electrike";
  public fullName: string = "Electrike MT 81";
  public text: string = "Electrike";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
