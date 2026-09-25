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

export class Porygon_39 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Conversion 1", cost: [], damage: "", text: "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless." },
      { name: "Conversion 2", cost: [], damage: "", text: "Change Porygon's Resistance to a type of your choice other than Colorless." }
  ];
  public set: string = "BS";
  public name: string = "Porygon";
  public fullName: string = "Porygon BS 39";
  public text: string = "Porygon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return /* changeWeakness */ state;
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return /* changeWeakness */ state;
    }
    return state;
  }
}
