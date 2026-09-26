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

export class Machoke_40 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machop";
  public hp: number = 90;
    public height?: number = 1.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Knuckle Down", cost: [], damage: "30", text: "This attack's damage isn't affected by Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon." },
      { name: "Strength", cost: [], damage: "60", text: "" }
  ];
  public set: string = "TM";
  public name: string = "Machoke";
  public fullName: string = "Machoke TM 40";
  public text: string = "Machoke";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
