import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';

export class HoOh_102 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Flames of Revival", cost: [], damage: "", text: "Put up to 3 Basic Pokémon from your discard pile onto your Bench." },
      { name: "Bright Wing", cost: [], damage: "130", text: "Discard a Fire Energy from this Pokémon." }
  ];
  public set: string = "CRI";
  public name: string = "Ho-Oh";
  public fullName: string = "Ho-Oh CRI 10";
  public text: string = "Ho-Oh";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* recoverFromDiscardToBench */ state;
    }
    return state;
  }
}
