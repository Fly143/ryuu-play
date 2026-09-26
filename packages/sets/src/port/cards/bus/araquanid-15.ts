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

export class Araquanid_15 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dewpider";
  public hp: number = 100;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Bubble Net", cost: [], damage: "30", text: "Energy can't be attached to the Defending Pokémon from your opponent's hand during their next turn." },
      { name: "Sharp Fang", cost: [], damage: "80", text: "" }
  ];
  public set: string = "BUS";
  public name: string = "Araquanid";
  public fullName: string = "Araquanid BUS 15";
  public text: string = "Araquanid";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
