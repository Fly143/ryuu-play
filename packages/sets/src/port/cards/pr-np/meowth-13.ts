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

export class Meowth_13 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 50;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plunder", cost: [], damage: "10", text: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon (before they affect the damage.)." },
      { name: "Scratch", cost: [], damage: "20", text: "" }
  ];
  public set: string = "PR-NP";
  public name: string = "Meowth";
  public fullName: string = "Meowth PR-NP 13";
  public text: string = "Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
