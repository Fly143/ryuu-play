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

export class Marowak_10 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Cubone";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Energy Bone", cost: [], damage: "", text: "Choose a number of your opponent's Pokémon up to the amount of Energy attached to Marowak. This attack does 20 damage to each of them." },
      { name: "Metal Crusher", cost: [], damage: "50", text: "If the Defending Pokémon is Metal Pokémon, this attack's base damage is 90." }
  ];
  public set: string = "DS";
  public name: string = "Marowak δ";
  public fullName: string = "Marowak δ DS 10";
  public text: string = "Marowak δ";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
