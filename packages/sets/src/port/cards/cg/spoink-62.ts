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

export class Spoink_62 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Psywave", cost: [], damage: "10×", text: "Does 10 damage times the amount of Energy attached to the Defending Pokémon." },
      { name: "Ram", cost: [], damage: "20", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Spoink";
  public fullName: string = "Spoink CG 62";
  public text: string = "Spoink";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* damageTimesEnergyDefending:10 */ state;
    }
    return state;
  }
}
