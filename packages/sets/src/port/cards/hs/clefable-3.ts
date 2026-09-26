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

export class Clefable_3 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Clefairy";
  public hp: number = 80;
    public height?: number = 1.1;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fairy Power", cost: [], damage: "", text: "Return 1 of your Pokémon and all cards attached to it to your hand." },
      { name: "Moon Impact", cost: [], damage: "40", text: "" }
  ];
  public set: string = "HS";
  public name: string = "Clefable";
  public fullName: string = "Clefable HS 3";
  public text: string = "Clefable";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    /* no scripted effect */
    return state;
  }
}
