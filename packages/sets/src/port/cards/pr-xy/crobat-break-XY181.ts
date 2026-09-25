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

export class CrobatBREAKXY181 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Crobat";
  public hp: number = 160;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Silent Bite", cost: [], damage: "60", text: "You may leave your opponent's Active Pokémon Paralyzed. If you do, shuffle this Pokémon and all cards attached to into your deck." }
  ];
  public set: string = "PR-XY";
  public name: string = "Crobat BREAK";
  public fullName: string = "Crobat BREAK PR-XY XY181";
  public text: string = "Crobat BREAK";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
