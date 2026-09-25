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

export class Togedemaru_187 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Let's All Rollout", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack." },
      { name: "Rolling Attack", cost: [], damage: "50", text: "" }
  ];
  public set: string = "EVS";
  public name: string = "Togedemaru";
  public fullName: string = "Togedemaru EVS 187";
  public text: string = "Togedemaru";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
