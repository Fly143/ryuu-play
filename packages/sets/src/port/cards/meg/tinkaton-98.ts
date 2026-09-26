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

export class Tinkaton_98 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Tinkatuff";
  public hp: number = 160;
    public height?: number = 2.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Windup Swing", cost: [], damage: "240-", text: "This attack does 60 less damage for each Energy attached to your opponent's Active Pokémon." }
  ];
  public set: string = "MEG";
  public name: string = "Tinkaton";
  public fullName: string = "Tinkaton MEG 98";
  public text: string = "Tinkaton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
