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

export class Jigglypuff_110 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 60;
    public height?: number = 0.5;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Pound", cost: [], damage: "20", text: "" },
      { name: "Let's All Rollout", cost: [], damage: "20×", text: "This attack does 20 damage for each of your Benched Pokémon that has the Let's All Rollout attack." }
  ];
  public set: string = "EVS";
  public name: string = "Jigglypuff";
  public fullName: string = "Jigglypuff EVS 110";
  public text: string = "Jigglypuff";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
