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

export class BrockSGolem_20 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Brock's Graveler";
  public hp: number = 90;
    public height?: number = 1.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Rock Slide", cost: [], damage: "20", text: "If your opponent has any Benched Pokémon, choose up to 3 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)" },
      { name: "Fissure", cost: [], damage: "50", text: "" }
  ];
  public set: string = "G1";
  public name: string = "Brock's Golem";
  public fullName: string = "Brock's Golem G1 20";
  public text: string = "Brock's Golem";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
