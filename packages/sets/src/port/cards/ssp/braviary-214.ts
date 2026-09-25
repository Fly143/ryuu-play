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

export class Braviary_214 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Rufflet";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Drag Off", cost: [], damage: "", text: "Switch in 1 of your opponent's Benched Pokémon to the Active Spot. This attack does 40 damage to the new Active Pokémon." },
      { name: "Blasting Wind", cost: [], damage: "120", text: "" }
  ];
  public set: string = "SSP";
  public name: string = "Braviary";
  public fullName: string = "Braviary SSP 214";
  public text: string = "Braviary";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
