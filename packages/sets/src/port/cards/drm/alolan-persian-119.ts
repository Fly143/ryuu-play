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

export class AlolanPersian_119 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Alolan Meowth";
  public hp: number = 90;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Empty Threat", cost: [], damage: "90-", text: "This attack does 30 less damage times the amount of Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "DRM";
  public name: string = "Alolan Persian";
  public fullName: string = "Alolan Persian DRM 119";
  public text: string = "Alolan Persian";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
