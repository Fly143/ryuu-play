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

export class Morpeko_206 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "In a Hungry Hurry", powerType: PowerType.ABILITY, text: "If this Pokémon has no Energy attached, it has no Retreat Cost.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energizer Wheel", cost: [], damage: "70", text: "Move 2 Darkness Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "PAR";
  public name: string = "Morpeko";
  public fullName: string = "Morpeko PAR 206";
  public text: string = "Morpeko";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
