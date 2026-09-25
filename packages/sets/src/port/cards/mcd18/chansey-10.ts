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

export class Chansey_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bind Wound", cost: [], damage: "", text: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon." },
      { name: "Hammer In", cost: [], damage: "80", text: "" }
  ];
  public set: string = "MCD18";
  public name: string = "Chansey";
  public fullName: string = "Chansey MCD18 10";
  public text: string = "Chansey";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* heal:30 */ state;
    }
    return state;
  }
}
