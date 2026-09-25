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

export class Yamask_54 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Transfer Pain", cost: [], damage: "", text: "Move 1 damage counter from any of your Pokémon to any of your opponent's Pokémon." }
  ];
  public set: string = "FLF";
  public name: string = "Yamask";
  public fullName: string = "Yamask FLF 54";
  public text: string = "Yamask";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* moveDamageCounters */ state;
    }
    return state;
  }
}
