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

export class Smoliv_21 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Nutrients", cost: [], damage: "", text: "Heal 30 damage from 1 of your Pokémon." },
      { name: "Spray Fluid", cost: [], damage: "20", text: "" }
  ];
  public set: string = "SVI";
  public name: string = "Smoliv";
  public fullName: string = "Smoliv SVI 21";
  public text: string = "Smoliv";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* heal:30 */ state;
    }
    return state;
  }
}
