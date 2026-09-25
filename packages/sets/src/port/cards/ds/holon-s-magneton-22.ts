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

export class HolonSMagneton_22 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Holon's Magnemite";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Extra Ball", cost: [], damage: "30+", text: "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage." }
  ];
  public set: string = "DS";
  public name: string = "Holon's Magneton";
  public fullName: string = "Holon's Magneton DS 22";
  public text: string = "Holon's Magneton";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
