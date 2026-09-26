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

export class Liepard_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Purrloin";
  public hp: number = 100;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dishonest Swap", cost: [], damage: "", text: "Move all damage counters from 1 of your Benched Pokémon to your opponent's Active Pokémon." },
      { name: "Slash", cost: [], damage: "60", text: "" }
  ];
  public set: string = "PAR";
  public name: string = "Liepard";
  public fullName: string = "Liepard PAR 115";
  public text: string = "Liepard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
