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

export class HopSRookidee_133 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Intimidating Stare", cost: [], damage: "", text: "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance)." },
      { name: "Peck", cost: [], damage: "20", text: "" }
  ];
  public set: string = "JTG";
  public name: string = "Hop's Rookidee";
  public fullName: string = "Hop's Rookidee JTG 133";
  public text: string = "Hop's Rookidee";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
