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

export class Combee_82 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Share", cost: [], damage: "", text: "Heal 20 damage from 1 of your Benched Pokémon." },
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "OBF";
  public name: string = "Combee";
  public fullName: string = "Combee OBF 8";
  public text: string = "Combee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* healBench:20 */ state;
    }
    return state;
  }
}
