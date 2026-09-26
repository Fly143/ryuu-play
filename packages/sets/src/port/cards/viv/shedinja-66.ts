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

export class Shedinja_66 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 30;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shell Survival", powerType: PowerType.ABILITY, text: "Put this Pokémon into play only with the effect of Ninjask's Cast-Off Shell Ability. (When you are setting up to play, you cannot put it face down as your Active Pokémon or on your Bench.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Life Squeeze", cost: [], damage: "", text: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10." }
  ];
  public set: string = "VIV";
  public name: string = "Shedinja";
  public fullName: string = "Shedinja VIV 66";
  public text: string = "Shedinja";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
