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

export class Spiritomb_35 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Spiritual End", cost: [], damage: "", text: "If you have 13 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, choose 2 of your opponent's Pokémon and quadruple the number of damage counters on each of them." }
  ];
  public set: string = "PBL";
  public name: string = "Spiritomb";
  public fullName: string = "Spiritomb PBL 35";
  public text: string = "Spiritomb";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
