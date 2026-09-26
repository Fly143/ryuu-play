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

export class Lombre_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Lotad";
  public hp: number = 70;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Plunder", cost: [], damage: "20", text: "Before doing damage, discard all Trainer cards attached to the Defending Pokémon." },
      { name: "Wave Splash", cost: [], damage: "50", text: "" }
  ];
  public set: string = "CG";
  public name: string = "Lombre";
  public fullName: string = "Lombre CG 37";
  public text: string = "Lombre";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
