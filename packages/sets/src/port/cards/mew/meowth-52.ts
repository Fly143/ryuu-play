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

export class Meowth_52 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 70;
    public height?: number = 0.4;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Come Here Right Meow", cost: [], damage: "", text: "Flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot." },
      { name: "Dig Claws", cost: [], damage: "20", text: "" }
  ];
  public set: string = "MEW";
  public name: string = "Meowth";
  public fullName: string = "Meowth MEW 52";
  public text: string = "Meowth";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
