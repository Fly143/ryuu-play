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

export class Grimmsnarl_73 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Morgrem";
  public hp: number = 170;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Shadowy Knot", cost: [], damage: "50×", text: "This attack does 50 damage for each Colorless in your opponent's Active Pokémon's Retreat Cost." },
      { name: "Mega Punch", cost: [], damage: "120", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Grimmsnarl";
  public fullName: string = "Grimmsnarl JTG 73";
  public text: string = "Grimmsnarl";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
