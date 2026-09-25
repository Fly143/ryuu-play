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

export class Scolipede_117 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Whirlipede";
  public hp: number = 170;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Dastardly Jab", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10." },
      { name: "Sludge Bomb", cost: [], damage: "160", text: "" }
  ];
  public set: string = "TWM";
  public name: string = "Scolipede";
  public fullName: string = "Scolipede TWM 117";
  public text: string = "Scolipede";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
