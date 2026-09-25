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

export class Tropius_7 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 100;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fresh-Picked Fruit", cost: [], damage: "", text: "Heal 60 damage from 1 of your Benched Pokémon." },
      { name: "Razor Leaf", cost: [], damage: "50", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Tropius";
  public fullName: string = "Tropius SVI 7";
  public text: string = "Tropius";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* healBench:60 */ state;
    }
    return state;
  }
}
