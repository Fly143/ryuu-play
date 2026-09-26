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

export class Cinccino_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Minccino";
  public hp: number = 90;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Amazing Plea", cost: [], damage: "", text: "Choose 2 cards from your discard pile. Then, ask your opponent if you may put them into your hand. If yes, put those cards into your hand. If no, this attack does 80 damage to your opponent's Active Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Cinccino";
  public fullName: string = "Cinccino CRI 86";
  public text: string = "Cinccino";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
